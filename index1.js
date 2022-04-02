vprintk( fmt, ap );
  va_end( ap );
}

static bool _Heap_Walk_check_free_list(
  int source,
  Heap_Walk_printer printer,
  const Heap_Block *const free_list_tail = _Heap_Free_list_tail( heap );
  const Heap_Block *const first_free_block = _Heap_Free_list_first( heap );
