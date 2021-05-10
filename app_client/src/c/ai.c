#include <emscripten/emscripten.h>

int t = 0;

int main(void){
  return 0;
}



int ai(void) {
   if (t == 0) {
     t = 1;
     return 0;
   } else {
     t = 0;
     return 1;
   }
}
