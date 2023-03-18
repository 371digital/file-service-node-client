## File Service Node Client


### uploadZipFile
Zip dosyası yüklemek için kullanılır. 

```
import fileService from "file-service-node-client";

const uploadResponse = await fileService.uploadZip(path.join(process.cwd(), "filRar.rar"), "oauth token");

/*
uploadResponse
{
  status: true,
  error: '',
  data: { fileId: '6415dde418fefc0ddc978216' }
}
*/
```


### downloadFile

Bir dosya indirmek için kullanılır. 

```
import fileService from "file-service-node-client";

const downloadResponse = await fileService.downloadFile(fileId, directoryPath) 

/*
downloadResponse
{
  status: true,
  error: '',
  data: {
    _id: '6415dde418fefc0ddc978216',
    name: '865ee15a-fc65-4875-883c-9274649763ca.rar',
    type: 'zipFile',
    visible: true,
    createdAt: '2023-03-18T15:51:00.863Z',
    updatedAt: '2023-03-18T15:51:00.863Z',
    __v: 0
  }
} 
*/
```

### getFileConfiguration 

Bir dosyanın bilgilerini getirmek için kullanılır.


```
import fileService from "file-service-node-client";

const fileConfigurationResponse = await fileService.getFileConfiguration(fileId) 

/*
fileConfigurationResponse
{
  status: true,
  error: '',
  data: {
    _id: '6415dde418fefc0ddc978216',
    name: '865ee15a-fc65-4875-883c-9274649763ca.rar',
    type: 'zipFile',
    visible: true,
    createdAt: '2023-03-18T15:51:00.863Z',
    updatedAt: '2023-03-18T15:51:00.863Z',
    __v: 0
  }
} 
*/
```