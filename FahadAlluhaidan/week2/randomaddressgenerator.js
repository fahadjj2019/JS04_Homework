let streetNumber = [ "1001", "1002","0323","8166","4030","1102"];
let streetName = [ "colomen" , "center", "mable", "hills","amazon","main"];
let cityName = [ "BOSTON","DENVER", "PHILIY","MAIAMI","SEATTLE","PORTLAND"];
let stateName = [ "New York", "Florida", "Colorado","Nevada","idaho","California"];
let zipCode  = [ "70042","33022","10102", "30302","7010","22011" ];
let address = Array(4);

//
address[0] = streetNumber[Math.floor(Math.random() * streetNumber.length)];
address[1]= streetName[Math.floor(Math.random() * streetName.length)];
address[2]= cityName[Math.floor(Math.random() * cityName.length)];
address[3]= streetName[Math.floor(Math.random() * stateName.length)];
address[4]= zipCode[Math.floor(Math.random() * zipCode.length)];





console.log(address.join(" "));
