#include <cxxabi.h>
#include <emscripten/bind.h>
#include <stdexcept>

using namespace emscripten;

int divide(int a, int b) {
  if (b == 0) {
    throw std::runtime_error("divide by zero");
  }
  return a / b;
}

EMSCRIPTEN_BINDINGS(my_module) { function("divide", &divide); };
