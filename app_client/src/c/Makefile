../js/as.wasm: ai.c
	emcc  -O3 -s  WASM=1 -s "EXPORTED_FUNCTIONS=['_ai']" ai.c -o ../js/node_modules/ai.wasm