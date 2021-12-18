XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
class testAPI
{
    Upload()
    {
      let data = "";

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
      xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/NewF.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-ZL6TG0pu6YM7uCQF1ho-W1CAwll-pZ9sHvSk7nB7CAqYTA1FbTekUnc1cy-fukWxr0CiYmMd8ti3KSDaDBuDdJNzoKrh25uNy4yjY7NRd8yJbx6dVziY9GAngEa3vHQ2I08fNt");
      
      xhr.send(data);
    }



    GetFileMetadata()
    {
      let data = JSON.stringify({
        "file": "/NewF.txt",
        "actions": []
      });
      
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.dropboxapi.com/2/sharing/get_file_metadata");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-ZL6TG0pu6YM7uCQF1ho-W1CAwll-pZ9sHvSk7nB7CAqYTA1FbTekUnc1cy-fukWxr0CiYmMd8ti3KSDaDBuDdJNzoKrh25uNy4yjY7NRd8yJbx6dVziY9GAngEa3vHQ2I08fNt");
      
      xhr.send(data);
    }


    DeleteFile()
    {
      let data = JSON.stringify({
        "path": "/NewF.txt"
      });
      
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-ZL6TG0pu6YM7uCQF1ho-W1CAwll-pZ9sHvSk7nB7CAqYTA1FbTekUnc1cy-fukWxr0CiYmMd8ti3KSDaDBuDdJNzoKrh25uNy4yjY7NRd8yJbx6dVziY9GAngEa3vHQ2I08fNt");
      
      xhr.send(data);
    }
}

Test=new testAPI();
/*setTimeout(Test.Upload,1000);
setTimeout(function(){console.log('\n')},2000);
setTimeout(Test.Delete_file,3000);
setTimeout(function(){console.log('\n')},4000);
setTimeout(Test.GetFileMetadata,5000);
setTimeout(function(){console.log('\n')},6000);*/
setTimeout(Test.Upload,7000);
setTimeout(function(){console.log('\n')},9000);
setTimeout(Test.GetFileMetadata,8000);
setTimeout(function(){console.log('\n')},10000);
setTimeout(Test.DeleteFile,11000);
setTimeout(function(){console.log('\n')},12000);