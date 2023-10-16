#include <stdio.h>
#include <cs50.h>

int main (void){
    int ssize=0;
    int esize=0;
    int years=0;
  do
  {
    ssize = get_int("Start size: ");
  }
  while (ssize<9);
  do
  {
    esize = get_int("Start size: ");
  }
  while (esize<ssize);

    while (ssize<esize){
        ssize = ssize + (ssize/3) - (ssize/4);
        years= years+1;
    }
    printf("Years: %i\n", years);
}
