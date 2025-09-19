var fullname ="Girija Vaidya";

var obj = {
    fullname: "Hacker Full Name",

    prop:
    {
        fullname: "Inside Prop",
        getFullname: function ()
        {

            // this refers to prop object
            return this.fullname;
        },
    },

    // same function is convert into arrow function
    getFullname: function ()
    {
        // this refer to obj to first object
        return this.fullname;
    },


    // this is do not refer anyone
    // in arrow function this refers to window and gloabl object
    // this object gloabal point
    // if the normal function then they refer to object
getFullnameV2: () => console.log(this),

getFullnameV3: (function ()
{
   return this.fullname;
//    efi
// value is assgined to getfullnamev3 it is property of obj
// anything can return string value is present 
})(),
}; 
console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());




