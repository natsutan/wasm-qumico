../js/as.wasm: ai.c
	emcc -s  WASM=1 -s "EXPORTED_FUNCTIONS=['_ai']"  ai.c -o ../../public/ai.wasm