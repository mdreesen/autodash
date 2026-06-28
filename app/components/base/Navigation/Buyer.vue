<template>
    <header class="p-4 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-between shadow-xs">
        <div>
            <h1 class="text-base font-black tracking-tight text-gray-900">Fleet Operations</h1>
            <p class="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-0.5">Commercial Workshop Console
            </p>
        </div>

        <!-- New Hot Shot Dispatch Order Button Link -->
        <button @click="$router.push('/buyer/order')"
            class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-colors">
            + Request Parts Run
        </button>
    </header>
</template>