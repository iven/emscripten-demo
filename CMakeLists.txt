cmake_minimum_required(VERSION 3.22)
project(WasmDemo CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_COMPILER_WORKS TRUE)

add_executable(demo wasm/demo.cpp wasm/hack.cpp)

# 修复 clangd 不生效： https://github.com/clangd/clangd/issues/1621#issuecomment-1703330511
execute_process(
    COMMAND em++ -fwasm-exceptions --cflags
    OUTPUT_VARIABLE EM_CFLAGS
)
string(STRIP "${EM_CFLAGS}" EM_CFLAGS)
set_target_properties(demo PROPERTIES COMPILE_FLAGS "${EM_CFLAGS}")

target_link_options(
    demo
    PRIVATE
        -lembind
        -sWASM_BIGINT
        -sMODULARIZE
        -sASSERTIONS
        -sEXPORT_ES6
        -sEXCEPTION_STACK_TRACES
        --no-entry
)
