#include <cstdint>

extern "C" {
void emscripten_trace_record_allocation(const void *address,
                                        std::int32_t size) {}
void emscripten_trace_record_reallocation(const void *old_address,
                                          const void *new_address,
                                          int32_t size) {}
void emscripten_trace_record_free(const void *address) {}
}
