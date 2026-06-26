<template>
    <div class="p-6">
        <!-- Title Section -->
        <div class="text-center mb-8">
            <div class="text-4xl font-bold mb-2">Style Guide</div>
            <div class="text-light text-lg">
                A comprehensive guide to our design system
            </div>
        </div>

        <!-- Color Palette -->
        <div class="mb-8">
            <div class="text-xl font-bold mb-4">Color Palette</div>
            <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-6 gap-4">
                <div class="prim p-4 rounded text-center">prim</div>
                <div class="sec p-4 rounded text-center">sec</div>
                <div class="success p-4 rounded text-center">success</div>
                <div class="warning p-4 rounded text-center">warning</div>
                <div class="danger p-4 rounded text-center">danger</div>
                <div class="light p-4 rounded text-center">light</div>
            </div>
        </div>

        <!-- Colors Usage -->
        <div class="mb-8">
            <div class="text-xl font-bold mb-4">Colors Usage</div>
            <div class="grid grid-cols md:grid-cols-2 gap-6">
                <!-- Text Only -->
                <div>
                    <div class="text-lg font-semibold mb-2">Text Only</div>
                    <div class="text-prim mb-1">Primary text color</div>
                    <div class="text-sec mb-1">Secondary text color</div>
                    <div class="text-success mb-1">Success text color</div>
                    <div class="text-warning mb-1">Warning text color</div>
                    <div class="text-danger mb-1">Danger text color</div>
                    <div class="text-light mb-1">Light text color</div>
                </div>

                <!-- Background Only -->
                <div>
                    <div class="text-lg font-semibold mb-2">Background Only</div>
                    <div class="bg-prim p-3 mb-2 rounded">
                        Primary background
                    </div>
                    <div class="bord-light bg-sec p-3 mb-2 rounded">
                        Secondary background
                    </div>
                    <div class="bord-light bg-success p-3 mb-2 rounded">
                        Success background
                    </div>
                    <div class="bord-light bg-warning p-3 mb-2 rounded">
                        Warning background
                    </div>
                    <div class="bord-light bg-danger p-3 mb-2 rounded">
                        Danger background
                    </div>
                    <div class="bord-light bg-light p-3 mb-2 rounded">
                        Light background
                    </div>
                </div>

                <!-- Text and Background -->
                <div>
                    <div class="text-lg font-semibold mb-2">
                        Text and Background
                    </div>
                    <div class="prim p-3 mb-2 rounded">
                        Primary text and background
                    </div>
                    <div class="sec p-3 mb-2 rounded">
                        Secondary text and background
                    </div>
                    <div class="success p-3 mb-2 rounded">
                        Success text and background
                    </div>
                    <div class="warning p-3 mb-2 rounded">
                        Warning text and background
                    </div>
                    <div class="danger p-3 mb-2 rounded">
                        Danger text and background
                    </div>
                    <div class="light p-3 mb-2 rounded">
                        Light text and background
                    </div>
                </div>

                <!-- Borders -->
                <div>
                    <div class="text-lg font-semibold mb-2">Borders</div>
                    <div class="border border-prim p-3 mb-2 rounded">
                        Primary border
                    </div>
                    <div class="border border-sec p-3 mb-2 rounded">
                        Secondary border
                    </div>
                    <div class="border border-success p-3 mb-2 rounded">
                        Success border
                    </div>
                    <div class="border border-warning p-3 mb-2 rounded">
                        Warning border
                    </div>
                    <div class="border border-danger p-3 mb-2 rounded">
                        Danger border
                    </div>
                    <div class="border border-light p-3 mb-2 rounded">
                        Light border
                    </div>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="mb-8">
            <div class="text-xl font-bold mb-4">Buttons</div>
            <div class="flex flex-wrap gap-4">
                <button class="prim btn px-4 py-2 rounded">Primary</button>
                <button class="sec btn px-4 py-2 rounded">Secondary</button>
                <button class="success btn px-4 py-2 rounded">Success</button>
                <button class="warning btn px-4 py-2 rounded">Warning</button>
                <button class="danger btn px-4 py-2 rounded">Danger</button>
                <button class="light btn px-4 py-2 rounded">Light</button>
            </div>
        </div>

        <!-- Form Elements -->
        <div class="mb-8">
            <div class="text-xl font-bold mb-4">Form Elements</div>
            <div class="grid grid-cols md:grid-cols-2 gap-6">
                <div>
                    <div class="mb-4">
                        <label class="block text-light mb-1">Input Field</label>
                        <input type="text" class="w-full p-2 border bord-light rounded" placeholder="Enter text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-light mb-1">Select Field</label>
                        <select class="w-full p-2 border bord-light rounded">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-light mb-1">Textarea</label>
                        <textarea class="w-full p-2 border bord-light rounded" rows="3"
                            placeholder="Enter text"></textarea>
                    </div>
                </div>
                <div>
                    <div class="mb-4">
                        <label class="block text-light mb-1">Checkbox</label>
                        <div class="flex items-center">
                            <input type="checkbox" class="mr-2" />
                            <span>Option 1</span>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="mr-2" />
                            <span>Option 2</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-light mb-1">Radio Buttons</label>
                        <div class="flex items-center">
                            <input type="radio" name="radio" class="mr-2" />
                            <span>Option 1</span>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" name="radio" class="mr-2" />
                            <span>Option 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Elements -->
        <div>
            <div class="text-xl font-bold mb-4">Other Elements</div>
            <div class="grid grid-cols md:grid-cols-3 gap-6">
                <div class="border bord-light rounded p-4">
                    <div class="text-lg font-semibold mb-2">Card</div>
                    <p class="text-light mb-3">
                        This is a sample card component with a border and padding.
                    </p>
                    <button class="success btn px-3 py-1 rounded">Action</button>
                </div>
                <div class="border bord-light rounded p-4">
                    <div class="text-lg font-semibold mb-2">Alert</div>
                    <div class="success p-3 rounded mb-3">
                        This is a success alert message
                    </div>
                    <div class="warning p-3 rounded mb-3">
                        This is a warning alert message
                    </div>
                    <div class="danger p-3 rounded">
                        This is a danger alert message
                    </div>
                </div>
                <div class="border bord-light rounded p-4">
                    <div class="text-lg font-semibold mb-2">Progress Bar</div>
                    <div class="w-full bg-light rounded-full h-2.5 mb-2">
                        <div class="success h-2.5 rounded-full" style="width: 65%">
                        </div>
                    </div>
                    <div class="text-sm text-light">65% Complete</div>
                </div>
            </div>
        </div>
    </div>
</template>
