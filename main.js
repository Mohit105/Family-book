var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://lh3.googleusercontent.com/proxy/0Yf268giOzH9-2LyR3CQ8WQcHeIYfxo7i2FbcyZurYb1N_DzgphwBN_p08COzo_6BURxFQD-0sBY3XvcoJleisf3lPeqzEbD", "https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-father-png-image_2457414.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIXjpRuoj6Yh0_TzmtdDKJ8dae1okK380WA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8ulEGhhCCKQd3fWgolquIrTJQQdcXOhDB6fI3Fngw8z0omOn_ZwkSJ5UeZsFkL90DaU&usqp=CAU", "https://www.pinclipart.com/picdir/middle/21-211056_png-mother-only-transparent-warioware-9-volt-mom.png"];
           
var names = ["Family book","Grandpa", "Grandma", "Dad", "Mohit Toor", "Sister", "Mom"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 6
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}