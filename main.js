let a = prompt("enter the number");
    for(i=1;i<=a;i++){
        for(j=1;j<=a;j++){
            if(i==1 || i==a || j==1 || j==a){
                document.write("*&nbsp");
            }
            else{
                document.write("&nbsp &nbsp");
            }
        }
        document.write('<br>');
    }