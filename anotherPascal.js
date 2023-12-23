export const anotherPascal=(n)=>{
  for(i=0;i<n;i++) 
	    {
          c=11**i
	        for (let j = n-i-1; j>0; j--) {
                document.write('&nbsp;');
          }
          for (let j = i; j>=0; j--){
              temp=c%10;
              document.write(temp);
              c=Math.floor(c/10);
          }
          document.write("<br>");
      }
}
