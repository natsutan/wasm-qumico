#include <emscripten/emscripten.h>

int x = 0;

int main(void)
{
  return 0;
}

int EMSCRIPTEN_KEEPALIVE ai(void) {

  if (x == 0) {
    x = 1;
    return 0;
  } else {
    x = 0;
    return 1;
  }
}
