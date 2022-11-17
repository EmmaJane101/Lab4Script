import fetch from 'node-fetch';


const ipUrl = "https://management.azure.com/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/publicIPAddresses/ipAddy?api-version=2019-02-01"
const NetUrl = "https://management.azure.com/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/networkInterfaces/netAddy?api-version=2022-05-01"
const vmUrl = "https://management.azure.com/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Compute/virtualMachines/emzie?api-version=2022-03-01"


const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83NjYzMTdjYi1lOTQ4LTRlNWYtOGNlYy1kYWJjOGUyZmQ1ZGEvIiwiaWF0IjoxNjY4NzAwMDg5LCJuYmYiOjE2Njg3MDAwODksImV4cCI6MTY2ODcwNDQ3NCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUp5U0d2ZU01UmtWaUpsTzloYUlOaHBGQ1QrWmtVVkRnejRQbVpZbWcvVGFFaWlBUGhjM2V2Qk5MYmk4c2s4Kzl0RFpzaEp0TFJzNFNIamhBRzlHdkxlSWlzcUcwSytqejhuaXV0MDNWem5vPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJjNDRiNDA4My0zYmIwLTQ5YzEtYjQ3ZC05NzRlNTNjYmRmM2MiLCJhcHBpZGFjciI6IjIiLCJmYW1pbHlfbmFtZSI6IlBvd2VyIiwiZ2l2ZW5fbmFtZSI6IkVtbWEgSmFuZSIsImdyb3VwcyI6WyI4N2Y2MDAzZC05NDcwLTQzOGYtYmZlZi04MTNiMzdmYzJiNjgiLCJkMmE2YThlZi00ZDI2LTRkOTUtYmQxMS1hYTFlYzYxOWY4MTgiLCI5N2FmODEyZC05NmU5LTRmMDEtOGExMS03NTgwMzM3NjIxN2EiLCI4YzgxODZlYS00MmE0LTQ0YWYtOGE3OC1hZTkxNDAxMWU2YjQiLCI1YWQ3ZDZiNC1hZGFmLTRiOWQtOTU3Zi0wZjNiNjE0YmVlNjAiLCIxMjVjYWI3Yy1mOWViLTQzZTUtOWUyMS01ZTNiNWRkZDA1YmEiLCI4YWMxNTRkZC1kNDVmLTRjNDYtOTRlNS1iYjc4ZmVmYTNhZWYiXSwiaXBhZGRyIjoiNzcuNzUuMjQ0LjE0NyIsIm5hbWUiOiJDMjAzMDU2NTYgRW1tYSBKYW5lIFBvd2VyIiwib2lkIjoiNTMzODAxMTMtNWJmYy00Mzg3LThlNTEtMGJjODkzMzUxMTdiIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIwMjU0MjkyNjUtMTk1ODM2NzQ3Ni03MjUzNDU1NDMtMzI2Mzg1IiwicHVpZCI6IjEwMDMyMDAwRTRBRTk1MTMiLCJyaCI6IjAuQVRFQXl4ZGpka2pwWDA2TTdOcThqaV9WMmtaSWYza0F1dGRQdWtQYXdmajJNQk14QUtNLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlpfdHBFUTBUNUxXWlhOcGc3S09HYzR1Umx6TngzUnJvRFZaUmVoeERlNVkiLCJ0aWQiOiI3NjYzMTdjYi1lOTQ4LTRlNWYtOGNlYy1kYWJjOGUyZmQ1ZGEiLCJ1bmlxdWVfbmFtZSI6IkMyMDMwNTY1NkBteXR1ZHVibGluLmllIiwidXBuIjoiQzIwMzA1NjU2QG15dHVkdWJsaW4uaWUiLCJ1dGkiOiJ6cDNESEZRaGtrYXJSMzF3MHlrU0FBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE1MjUzMzg5NDF9.FZv9DOkvkOpFmHzpECKmt21Xpf_g04x6tSeuG0SkwI6VpvhCCp8MHR2peYbzu5HDHLJbYTZr9mXL6HgV5kuVmaX-oY15QyiJoTi8_hkFjSwt_AWNzbQ6gxdVGu8JljiBf_ks4BX64L_Yc26g_sP9QWM1whOJ2a3xSKV9YjosVogBdcCOo8DLNcmqXePYa5IgDrM5aBV_VtzZvLG3tGFp35zWuQgvPFTcVwSTJ0i7s0CGNCSGco_p6OWzE2Hssgke5dFWqEV1TxGPKV7kskN7zNcg0kaNbPhZpLIMj4-6NvXuLwiHHnXiNoWrK4D3-tWUmL__PJN-cCT1avXSvZ6qDw"

async function createPublicIP(){
    await fetch(ipUrl, {
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': token
        },

        body: JSON.stringify(
            
                {
                    "name": "ipAddy",
                    "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/publicIPAddresses/ipAddy",
                    "etag": "W/\"8ad74120-e5e3-4648-999e-1e8d4cdeb759\"",
                    "location": "westeurope",
                    "properties": {
                        "provisioningState": "Succeeded",
                        "resourceGuid": "1f46118f-ee5c-4d9d-9981-bb4b91309c4f",
                        "ipAddress": "20.23.107.78",
                        "publicIPAddressVersion": "IPv4",
                        "publicIPAllocationMethod": "Static",
                        "idleTimeoutInMinutes": 4,
                        "ipTags": []
                    },
                    "type": "Microsoft.Network/publicIPAddresses",
                    "sku": {
                        "name": "Standard"
                    }
                }
            
        )
    }).then(res => res.json())
    .then(res => console.log(res))
}

createPublicIP();

async function createNetworkInt(){
    await fetch(NetUrl, {
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': token
        },

        body: JSON.stringify(
            
            {
                "name": "netAddy",
                "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/networkInterfaces/netAddy",
                "etag": "W/\"106ff03a-51f8-46f1-8129-dbe2ec7d7fed\"",
                "tags": {},
                "properties": {
                    "provisioningState": "Succeeded",
                    "resourceGuid": "221b6057-ea75-4412-8628-868708c0a2d7",
                    "ipConfigurations": [
                        {
                            "name": "Ipv4config",
                            "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/networkInterfaces/netAddy/ipConfigurations/Ipv4config",
                            "etag": "W/\"106ff03a-51f8-46f1-8129-dbe2ec7d7fed\"",
                            "type": "Microsoft.Network/networkInterfaces/ipConfigurations",
                            "properties": {
                                "provisioningState": "Succeeded",
                                "privateIPAddress": "10.2.0.5",
                                "privateIPAllocationMethod": "Dynamic",
                                "subnet": {
                                    "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/myVM_group/providers/Microsoft.Network/virtualNetworks/myVM_group-vnet/subnets/default"
                                },
                                "primary": true,
                                "privateIPAddressVersion": "IPv4"
                            }
                        }
                    ],
                    "dnsSettings": {
                        "dnsServers": [],
                        "appliedDnsServers": [],
                        "internalDomainNameSuffix": "uniayorbdmuufeij2eh1yzxy1f.ax.internal.cloudapp.net"
                    },
                    "enableAcceleratedNetworking": false,
                    "vnetEncryptionSupported": false,
                    "enableIPForwarding": false,
                    "hostedWorkloads": [],
                    "tapConfigurations": [],
                    "nicType": "Standard"
                },
                "type": "Microsoft.Network/networkInterfaces",
                "location": "westeurope",
                "kind": "Regular"
            }
            
        )
    }).then(res => res.json())
    .then(res => console.log(res))
}

createNetworkInt();

async function createVm(){
    await fetch(NetUrl, {
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': token
        },

        body: JSON.stringify(
            
            {
                "name": "emzie",
                "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Compute/virtualMachines/emzie",
                "type": "Microsoft.Compute/virtualMachines",
                "location": "westeurope",
                "properties": {
                    "vmId": "4bffde4b-b67b-43bd-ad3e-0c9f18aaee64",
                    "hardwareProfile": {
                        "vmSize": "Standard_E2s_v3"
                    },
                    "storageProfile": {
                        "imageReference": {
                            "publisher": "canonical",
                            "offer": "0001-com-ubuntu-server-focal",
                            "sku": "20_04-lts-gen2",
                            "version": "latest"
                        },
                        "osDisk": {
                            "osType": "Linux",
                            "name": "emzie_OsDisk_1_f334b6946332417c938550e59d239dc0",
                            "createOption": "FromImage",
                            "caching": "ReadWrite",
                            "managedDisk": {
                                "storageAccountType": "Premium_LRS",
                                "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Compute/disks/emzie_OsDisk_1_f334b6946332417c938550e59d239dc0"
                            },
                            "diskSizeGB": 30
                        },
                        "dataDisks": []
                    },
                    "osProfile": {
                        "computerName": "emzie",
                        "adminUsername": "username",
                        "linuxConfiguration": {
                            "disablePasswordAuthentication": true,
                            "ssh": {
                                "publicKeys": [
                                    {
                                        "path": "/home/username/.ssh/authorized_keys",
                                        "keyData": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDD5F7aBpovLxV9BcRXds3vIubprAqmZPg3A1dOC4EYO5HISwlD6ToiTzYvh24LcFQrnfyxD+MDci1eI81E2+3Zt0y0mhs2DqzCiA1Ck/J4sShEtmxQWs0jLfJIETHufvPloyaRYSZBBKGGtrr6FFw+Ahgsbw1SJPxnLrF+gV1ZqYe5GnoLOqQ859sZ3SrMcRNVSZSNzoKW+cvkvYSnH8ipJS1ODJyCRUE4c8PzMmzdMHNFLVBA+UBEI1m8OI7/2/I4IQotATsaVnx1rEpurJcU6vpGxUVN30OeZgtzWbigCWS//mIEwkYPLja3YPX1n2sB9QGm6oELrHa/hf8F54imNsE+37lxIMA6BuUJwELzRk5Wnhq5eQJ+X+oDQcN15RQfoQ2ufuqHPlq80ZVvIhdVl9X4xp7In8EON7MXO7iTgLCz4OZEtxjtKGIwmhVdo0FhysqTnXzq5hpdAIvmNXAhx9T+UyiSAjaewOS5e26nKskD/4HX5GaDVL/bqriClhU= emma_@LAPTOP-OCCJQN8G"
                                    }
                                ]
                            }
                        },
                        "secrets": []
                    },
                    "networkProfile": {
                        "networkInterfaces": [
                            {
                                "id": "/subscriptions/7325b388-2b8f-4c9c-ad25-8e39bb20e1b3/resourceGroups/emma_group/providers/Microsoft.Network/networkInterfaces/emzie989_z1",
                                "properties": {
                                    "deleteOption": "Detach"
                                }
                            }
                        ]
                    },
                    "diagnosticsProfile": {
                        "bootDiagnostics": {
                            "enabled": true
                        }
                    },
                    "provisioningState": "Succeeded"
                },
                "zones": [
                    "1"
                ]
            }
            
        )
    }).then(res => res.json())
    .then(res => console.log(res))
}

createVm();
