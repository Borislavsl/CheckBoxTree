const data = {
  result: {
    _shards: { total: 5, failed: 0, successful: 5 },
    hits: {
      hits: [
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-dns-01.Acme-Labs.Local",
            os: "Windows Server 2012 R2 Standard",
            sAMAccountName: "ACM-RT-DNS-01$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-dns-01.Acme-Labs.Local",
          sort: [null],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-dcp-03.Acme-Labs.Local",
            os: "Windows Server 2012 R2 Standard",
            sAMAccountName: "ACM-RT-DCP-03$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-dcp-03.Acme-Labs.Local",
          sort: [null],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-nbt-04.Acme-Labs.Local",
            os: "Windows Server 2012 R2 Standard",
            sAMAccountName: "ACM-RT-NBT-04$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-nbt-04.Acme-Labs.Local",
          sort: [null],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-roc-06.Acme-Labs.Local",
            sAMAccountName: "ACM-RT-ROC-06$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-roc-06.Acme-Labs.Local",
          sort: [null],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-dns-02.Acme-Labs.Local",
            os: "Windows Server 2012 R2 Standard",
            sAMAccountName: "ACM-RT-DNS-02$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-dns-02.Acme-Labs.Local",
          sort: [null],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "dc",
          _source: {
            hostname: "acm-rt-cli-05.Acme-Labs.Local",
            os: "Windows Server 2012 R2 Standard",
            sAMAccountName: "ACM-RT-CLI-05$",
            adDomain: "Acme-Labs.Local"
          },
          _id: "acm-rt-cli-05.Acme-Labs.Local",
          sort: [null],
          _score: null
        }
      ],
      total: 6,
      max_score: null
    },
    took: 1,
    timed_out: false
  },
  inProgress: false,
  success: true,
  error: null
};

const formatData = () => {
  var formattedData = []
  data.result.hits.hits.forEach(elem => {
    var element = elem._source;
    var groupPath = element.adDomain;
    var obj = {
      value: groupPath,
      parentId: "",
      label: groupPath,
      children:[]
    }
    formattedData.push(obj);
      var accountPath = `${groupPath}/${element.hostname}`.toLowerCase();
      var accountObj = {
        value: accountPath,
        isLeaf: true,
        parentId: groupPath,
        label: element.hostname
      }
    formattedData.push(accountObj);
  });
  return formattedData;
}

export const build = () => {
  var data = formatData();
  var nodeMap = {};
  data.forEach(item => {
    nodeMap[item.value] = item;
  })

  var finalArr = [];

  Object.keys(nodeMap).forEach(item => {
    var parentId = nodeMap[item].parentId;

    if(parentId){
      
      nodeMap[parentId].children.push(nodeMap[item])
    }
    else{
        finalArr.push(nodeMap[item]);
    }
  })

  return finalArr;
}

