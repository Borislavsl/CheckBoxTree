import React from "react";
import FontAwesome from "react-fontawesome";
 
var data = {
  result: {
    _shards: { total: 5, failed: 0, successful: 5 },
    hits: {
      hits: [
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "vinay@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "vinay@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=z_test_computer,DC=Acme-Labs,DC=Local; CN=z_test_user,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "vinay",
            adDomain: "Acme-Labs.Local"
          },
          _id: "vinay@Acme-Labs.Local",
          sort: ["z_test_user"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "chandan@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Hyper-V Administrators",
                dn: "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "chandan@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=groupA,CN=Users,DC=Acme-Labs,DC=Local; CN=z_test_user,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "chandan",
            adDomain: "Acme-Labs.Local"
          },
          _id: "chandan@Acme-Labs.Local",
          sort: ["z_test_user"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "usewinrm@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "usewinrm@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Remote Management Users,CN=Builtin,DC=Acme-Labs,DC=Local; CN=Event Log Readers,CN=Builtin,DC=Acme-Labs,DC=Local; CN=WinRMRemoteWMIUsers__,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "usewinrm",
            adDomain: "Acme-Labs.Local"
          },
          _id: "usewinrm@Acme-Labs.Local",
          sort: ["winrmremotewmiusers__"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "specialone@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "specialone@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=S{p}ecial group12two,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=S`~p!e@c\\#i$a%l^g&ro(u)p-o_ne,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "specialone",
            adDomain: "Acme-Labs.Local"
          },
          _id: "specialone@Acme-Labs.Local",
          sort: ["w"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Specialtwo@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Specialtwo@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=S{p}ecial group12two,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=S`~p!e@c\\#i$a%l^g&ro(u)p-o_ne,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Specialtwo",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Specialtwo@Acme-Labs.Local",
          sort: ["w"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "specialthree@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "specialthree@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=S{p}ecial group12two,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=S`~p!e@c\\#i$a%l^g&ro(u)p-o_ne,OU=S`p~e!c@i\\#a$l_C%h^a&r*a(c)-t\\=e\\+r{s[i}s]s\\\\u|e\\;u'n\\\"k\\<n\\>o/w?n.b\\,u g1s,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "specialthree",
            adDomain: "Acme-Labs.Local"
          },
          _id: "specialthree@Acme-Labs.Local",
          sort: ["w"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "botsinkad@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Hyper-V Administrators",
                dn: "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "botsinkad@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=LinuxLogin,CN=Users,DC=Acme-Labs,DC=Local; CN=Remote Management Users,CN=Builtin,DC=Acme-Labs,DC=Local; CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "botsinkad",
            adDomain: "Acme-Labs.Local"
          },
          _id: "botsinkad@Acme-Labs.Local",
          sort: ["v"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "shiv@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Hyper-V Administrators",
                dn: "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "shiv@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local; CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "shiv",
            adDomain: "Acme-Labs.Local"
          },
          _id: "shiv@Acme-Labs.Local",
          sort: ["v"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "arvind@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Hyper-V Administrators",
                dn: "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "arvind@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "arvind",
            adDomain: "Acme-Labs.Local"
          },
          _id: "arvind@Acme-Labs.Local",
          sort: ["v"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "gorang@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Hyper-V Administrators",
                dn: "CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "gorang@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=DnsAdmins,CN=Users,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Hyper-V Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "gorang",
            adDomain: "Acme-Labs.Local"
          },
          _id: "gorang@Acme-Labs.Local",
          sort: ["v"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Charlene.Johnson@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Charlene.Johnson@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Charlene.Johnson",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Charlene.Johnson@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Joel.Lumpkin@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Joel.Lumpkin@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Joel.Lumpkin",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Joel.Lumpkin@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Josephine.Johnson@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Josephine.Johnson@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Josephine.Johnson",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Josephine.Johnson@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "autoSelect_user@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "autoSelect_user@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "autoSelect_user",
            adDomain: "Acme-Labs.Local"
          },
          _id: "autoSelect_user@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Keith.Moore@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Keith.Moore@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Keith.Moore",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Keith.Moore@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Lesa.Williams@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Lesa.Williams@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Lesa.Williams",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Lesa.Williams@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Ann.Guerrero@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Ann.Guerrero@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Ann.Guerrero",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Ann.Guerrero@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Administrator@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Group Policy Creator Owners",
                dn:
                  "CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Netmon Users,CN=Users,DC=Acme-Labs,DC=Local; CN=Group Policy Creator Owners,CN=Users,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Administrator",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Administrator@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Rosa.Swope@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Rosa.Swope@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Rosa.Swope",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Rosa.Swope@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Daniel.Davenport@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Daniel.Davenport@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Daniel.Davenport",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Daniel.Davenport@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Pearline.Williams@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Pearline.Williams@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Pearline.Williams",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Pearline.Williams@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Sarita.Ba/iley@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Sarita.Ba/iley@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Sarita.Bailey",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Sarita.Ba/iley@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Thomas.Brannigan@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Thomas.Brannigan@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Thomas.Brannigan",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Thomas.Brannigan@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Dwight.Bender@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Dwight.Bender@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Dwight.Bender",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Dwight.Bender@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Amy.Gulley@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Amy.Gulley@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=LocalGrp,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=qatest,DC=Acme-Labs,DC=Local; CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Amy.Gulley",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Amy.Gulley@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Francie.Quintero@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Francie.Quintero@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Francie.Quintero",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Francie.Quintero@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Michael.Reynolds@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Michael.Reynolds@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Michael.Reynolds",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Michael.Reynolds@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Mary.Grace@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Mary.Grace@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Mary.Grace",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Mary.Grace@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "asccm@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "asccm@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local; CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "asccm",
            adDomain: "Acme-Labs.Local"
          },
          _id: "asccm@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Theresa.Bates@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Theresa.Bates@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Theresa.Bates",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Theresa.Bates@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Benjamin.Cooper@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Benjamin.Cooper@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Benjamin.Cooper",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Benjamin.Cooper@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Dolores.Morales@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Dolores.Morales@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Dolores.Morales",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Dolores.Morales@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Arthur.Slaughter@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Arthur.Slaughter@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Arthur.Slaughter",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Arthur.Slaughter@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Lesley.Savage@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Lesley.Savage@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Lesley.Savage",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Lesley.Savage@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Alice.Clements@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Alice.Clements@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Alice.Clements",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Alice.Clements@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "George@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "George@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "George",
            adDomain: "Acme-Labs.Local"
          },
          _id: "George@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Waneta.Lee@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Waneta.Lee@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Waneta.Lee",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Waneta.Lee@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Anne.Pack@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Anne.Pack@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Anne.Pack",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Anne.Pack@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Carol.Wagner@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Enterprise Admins",
                dn: "CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Carol.Wagner@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-4,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Enterprise Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Carol.Wagner",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Carol.Wagner@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Joseph.Antony@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Joseph.Antony@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Joseph.Antony",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Joseph.Antony@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Valerie.Westling@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Valerie.Westling@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Valerie.Westling",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Valerie.Westling@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Phyllis.Roddy@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Phyllis.Roddy@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Phyllis.Roddy",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Phyllis.Roddy@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Jill.Benefield@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Schema Admins",
                dn: "CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Jill.Benefield@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-3,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Schema Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Jill.Benefield",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Jill.Benefield@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Patricia.Lee@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              },
              {
                domain: "Acme-Labs.Local",
                name: "Domain Admins",
                dn: "CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Patricia.Lee@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-2,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Domain Admins,CN=Users,DC=Acme-Labs,DC=Local",
            userName: "Patricia.Lee",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Patricia.Lee@Acme-Labs.Local",
          sort: ["users"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Maria.Lopez@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Maria.Lopez@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Maria.Lopez",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Maria.Lopez@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Roger.Welch@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Roger.Welch@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Roger.Welch",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Roger.Welch@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Christine.Wright@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Christine.Wright@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Christine.Wright",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Christine.Wright@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Jeffrey.Hill@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Jeffrey.Hill@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Jeffrey.Hill",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Jeffrey.Hill@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Freddie.Cochran@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Freddie.Cochran@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Freddie.Cochran",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Freddie.Cochran@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Daniel.Fridley@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Daniel.Fridley@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Daniel.Fridley",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Daniel.Fridley@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Lawrence.Priest@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Lawrence.Priest@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Lawrence.Priest",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Lawrence.Priest@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Adrian.Savell@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Adrian.Savell@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Adrian.Savell",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Adrian.Savell@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Patricia.Johnson@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Patricia.Johnson@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Patricia.Johnson",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Patricia.Johnson@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "Herman.Aquino@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "Herman.Aquino@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf:
              "CN=IT-Level-1,OU=Groups,OU=IT & DevOps,DC=Acme-Labs,DC=Local; CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "Herman.Aquino",
            adDomain: "Acme-Labs.Local"
          },
          _id: "Herman.Aquino@Acme-Labs.Local",
          sort: ["ou"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "voodoo@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Account Operators",
                dn: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "voodoo@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf: "CN=Account Operators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "voodoo",
            adDomain: "Acme-Labs.Local"
          },
          _id: "voodoo@Acme-Labs.Local",
          sort: ["operators"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "inserteduser@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "inserteduser",
            adDomain: "Acme-Labs.Local"
          },
          _id: "inserteduser@Acme-Labs.Local",
          sort: ["local"],
          _score: null
        },
        {
          _index: "ad-intercept",
          _type: "user",
          _source: {
            esDocId: "lcmadmin@Acme-Labs.Local",
            privilegedGroups: [
              {
                domain: "Acme-Labs.Local",
                name: "Administrators",
                dn: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local"
              }
            ],
            upn: "lcmadmin@Acme-Labs.Local",
            isManagedServiceAccount: true,
            isPrivilegedAccount: true,
            memberOf: "CN=Administrators,CN=Builtin,DC=Acme-Labs,DC=Local",
            userName: "lcmadmin",
            adDomain: "Acme-Labs.Local"
          },
          _id: "lcmadmin@Acme-Labs.Local",
          sort: ["local"],
          _score: null
        }
      ],
      total: 57,
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
  data.result.hits.hits.forEach(element => {
    var d = element._source;
    //var adminDomain = d.adDomain.toLowerCase();
    d.privilegedGroups.forEach(privGroup => {
      var groupPath = privGroup.name;
      var obj = {
        value: groupPath,
        parentId: "",
        label: privGroup.name,
        children: [],
        icon:<FontAwesome name="group" />
      }
      formattedData.push(obj);
      var domainPath = `${groupPath}/${privGroup.domain}`.toLowerCase();
      var domianObj = {
        value: domainPath,
        parentId: groupPath,
        label: privGroup.domain,
        children:[],
        icon:<FontAwesome name="rocket" />
      }
      formattedData.push(domianObj);
      var adminPath = `${domainPath}/${d.esDocId}`.toLowerCase();
      var adminObj = {
        value: adminPath,
          parentId: domainPath,
          label: d.userName,
          icon:<FontAwesome name="user" />
      }
      formattedData.push(adminObj);
    })
  });
  return formattedData;
}

export const build = () => {
  var data = formatData();
  var nodeMap = {};
  data.forEach(item => {
    nodeMap[item.value] = item;
  });
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