<template>
    <div class="p-6">
        <!-- Title Section -->
        <div class="text-center mb-12">
            <div class="text-4xl font-bold mb-2">Style Guide</div>
            <div class="text-lg">
                A comprehensive guide to our design system
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- SECTION 1: BRAND COLORS (prim, sec, ter)                     -->
        <!-- ============================================================ -->
        <div class="mb-12">
            <div class="text-2xl font-bold mb-2 border-b border-lighter pb-2">Brand Colors</div>
            <div class="text-sm mb-6">Primary brand colors with automatic dark mode support</div>

            <!-- Brand Color Palette -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div class="prim p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">prim</div>
                    <div class="text-xs opacity-75">Primary brand color</div>
                </div>
                <div class="sec p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">sec</div>
                    <div class="text-xs opacity-75">Secondary brand color</div>
                </div>
                <div class="ter p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">ter</div>
                    <div class="text-xs opacity-75">Tertiary brand color</div>
                </div>
            </div>

            <!-- Brand Color Usage Patterns -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Text Only -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Text Only</div>
                    <div class="space-y-2">
                        <div class="text-prim">Primary text</div>
                        <div class="text-sec">Secondary text</div>
                        <div class="text-ter">Tertiary text</div>
                    </div>
                </div>

                <!-- Background Only -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Background Only</div>
                    <div class="space-y-2">
                        <div class="bg-prim p-2 rounded mb-1">Primary background</div>
                        <div class="bg-sec p-2 rounded mb-1">Secondary background</div>
                        <div class="bg-ter p-2 rounded mb-1">Tertiary background</div>
                    </div>
                </div>

                <!-- Text & Background (combined utility) -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Text + Background</div>
                    <div class="space-y-2">
                        <div class="prim p-2 rounded mb-1">Primary combined</div>
                        <div class="sec p-2 rounded mb-1">Secondary combined</div>
                        <div class="ter p-2 rounded mb-1">Tertiary combined</div>
                    </div>
                </div>

                <!-- Borders -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Borders</div>
                    <div class="space-y-2">
                        <div class="border border-prim p-2 rounded mb-1">Primary border</div>
                        <div class="border border-sec p-2 rounded mb-1">Secondary border</div>
                        <div class="border border-ter p-2 rounded mb-1">Tertiary border</div>
                    </div>
                </div>
            </div>

            <!-- Brand Buttons -->
            <div class="mt-6">
                <div class="text-sm font-semibold mb-3">Buttons</div>
                <div class="flex flex-wrap gap-3">
                    <button class="prim btn px-4 py-2 rounded">Primary</button>
                    <button class="sec btn px-4 py-2 rounded">Secondary</button>
                    <button class="ter btn px-4 py-2 rounded">Tertiary</button>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- SECTION 2: BACKGROUND & NEUTRAL GREYS                        -->
        <!-- ============================================================ -->
        <div class="mb-12">
            <div class="text-2xl font-bold mb-2 border-b border-lighter pb-2">Background & Neutral Greys</div>
            <div class="text-sm mb-6">Neutral tones for surfaces, text, and spacing</div>

            <!-- Full Grey Scale Palette -->
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
                <div class="background p-4 rounded-lg text-center shadow-sm border border-lighter">
                    <div class="text-xs font-semibold mb-1">background</div>
                    <div class="text-xs opacity-75">White surface</div>
                </div>
                <div class="light p-4 rounded-lg text-center shadow-sm">
                    <div class="text-xs font-semibold mb-1">light</div>
                    <div class="text-xs opacity-75">Dark text</div>
                </div>
                <div class="semilight p-4 rounded-lg text-center shadow-sm">
                    <div class="text-xs font-semibold mb-1">semilight</div>
                    <div class="text-xs opacity-75">Medium grey</div>
                </div>
                <div class="l2 p-4 rounded-lg text-center shadow-sm">
                    <div class="text-xs font-semibold mb-1">l2 (alias)</div>
                    <div class="text-xs opacity-75">= semilight</div>
                </div>
                <div class="lighter p-4 rounded-lg text-center shadow-sm border border-lighter">
                    <div class="text-xs font-semibold mb-1">lighter</div>
                    <div class="text-xs opacity-75">Light grey</div>
                </div>
                <div class="l3 p-4 rounded-lg text-center shadow-sm">
                    <div class="text-xs font-semibold mb-1">l3 (alias)</div>
                    <div class="text-xs opacity-75">= lighter</div>
                </div>
                <div class="superlight p-4 rounded-lg text-center shadow-sm border border-lighter">
                    <div class="text-xs font-semibold mb-1">superlight</div>
                    <div class="text-xs opacity-75">Very light</div>
                </div>
                <div class="l4 p-4 rounded-lg text-center shadow-sm">
                    <div class="text-xs font-semibold mb-1">l4 (alias)</div>
                    <div class="text-xs opacity-75">= superlight</div>
                </div>
            </div>

            <!-- Grey Scale Usage -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Background Usage -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Background Surfaces</div>
                    <div class="space-y-3">
                        <div class="background border border-lighter p-3 rounded">
                            <div class="font-medium mb-1">background</div>
                            <div class="text-xs">Main page background / white surface</div>
                        </div>
                        <div class="lighter border border-lighter p-3 rounded">
                            <div class="font-medium mb-1">lighter</div>
                            <div class="text-xs">Card backgrounds, subtle dividers</div>
                        </div>
                        <div class="superlight border border-lighter p-3 rounded">
                            <div class="font-medium mb-1">superlight</div>
                            <div class="text-xs">Hover states, inactive elements</div>
                        </div>
                    </div>
                </div>

                <!-- Text Usage -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Text Colors</div>
                    <div class="space-y-3">
                        <div class="p-3">
                            <div class="font-medium mb-1">light</div>
                            <div class="text-xs opacity-75">Muted/descriptive text</div>
                        </div>
                        <div class="p-3 bg-lighter rounded">
                            <div class="text-semilight font-medium mb-1">semilight / l2</div>
                            <div class="text-xs text-semilight opacity-75">Secondary content on light backgrounds</div>
                        </div>
                        <div class="p-3 bg-light border border-lighter rounded">
                            <div class="text-background font-medium mb-1">background (on dark)</div>
                            <div class="text-xs text-background opacity-75">Text on darker surfaces</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alias Reference -->
            <div class="mt-6 border border-lighter rounded-lg p-4 bg-superlight">
                <div class="text-sm font-semibold mb-2">Alias Reference</div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div><code class="text-prim">l1</code> = light</div>
                    <div><code class="text-prim">l2</code> = semilight</div>
                    <div><code class="text-prim">l3</code> = lighter</div>
                    <div><code class="text-prim">l4</code> = superlight</div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- SECTION 3: SEMANTIC COLORS                                   -->
        <!-- ============================================================ -->
        <div class="mb-12">
            <div class="text-2xl font-bold mb-2 border-b border-lighter pb-2">Semantic Colors</div>
            <div class="text-sm mb-6">Status and feedback colors with automatic dark mode support</div>

            <!-- Semantic Color Palette -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="success p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">success</div>
                    <div class="text-xs opacity-75">Positive / completed</div>
                </div>
                <div class="warning p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">warning</div>
                    <div class="text-xs opacity-75">Caution / attention</div>
                </div>
                <div class="danger p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">danger</div>
                    <div class="text-xs opacity-75">Error / destructive</div>
                </div>
                <div class="info p-6 rounded-lg text-center shadow-sm">
                    <div class="text-lg font-semibold mb-1">info</div>
                    <div class="text-xs opacity-75">Information / help</div>
                </div>
            </div>

            <!-- Semantic Usage Patterns -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Text Only -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Text Only</div>
                    <div class="space-y-2">
                        <div class="text-success">Success message</div>
                        <div class="text-warning">Warning message</div>
                        <div class="text-danger">Danger message</div>
                        <div class="text-info">Info message</div>
                    </div>
                </div>

                <!-- Background Only -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Background Only</div>
                    <div class="space-y-2">
                        <div class="bg-success p-2 rounded mb-1">Success background</div>
                        <div class="bg-warning p-2 rounded mb-1">Warning background</div>
                        <div class="bg-danger p-2 rounded mb-1">Danger background</div>
                        <div class="bg-info p-2 rounded mb-1">Info background</div>
                    </div>
                </div>

                <!-- Text & Background -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Text + Background</div>
                    <div class="space-y-2">
                        <div class="success p-2 rounded mb-1">Success combined</div>
                        <div class="warning p-2 rounded mb-1">Warning combined</div>
                        <div class="danger p-2 rounded mb-1">Danger combined</div>
                        <div class="info p-2 rounded mb-1">Info combined</div>
                    </div>
                </div>

                <!-- Borders -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Borders</div>
                    <div class="space-y-2">
                        <div class="border border-success p-2 rounded mb-1">Success border</div>
                        <div class="border border-warning p-2 rounded mb-1">Warning border</div>
                        <div class="border border-danger p-2 rounded mb-1">Danger border</div>
                        <div class="border border-info p-2 rounded mb-1">Info border</div>
                    </div>
                </div>
            </div>

            <!-- Semantic Buttons -->
            <div class="mt-6">
                <div class="text-sm font-semibold mb-3">Buttons</div>
                <div class="flex flex-wrap gap-3">
                    <button class="success btn px-4 py-2 rounded">Success</button>
                    <button class="warning btn px-4 py-2 rounded">Warning</button>
                    <button class="danger btn px-4 py-2 rounded">Danger</button>
                    <button class="info btn px-4 py-2 rounded">Info</button>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- SECTION 4: COMPONENTS                                        -->
        <!-- ============================================================ -->
        <div class="mb-12">
            <div class="text-2xl font-bold mb-2 border-b border-lighter pb-2">Components</div>
            <div class="text-sm mb-6">Reusable UI components using the design system</div>

            <!-- Buttons -->
            <div class="mb-8">
                <div class="text-lg font-semibold mb-3">All Button Variants</div>
                <div class="flex flex-wrap gap-3">
                    <button class="prim btn px-4 py-2 rounded">Primary</button>
                    <button class="sec btn px-4 py-2 rounded">Secondary</button>
                    <button class="ter btn px-4 py-2 rounded">Tertiary</button>
                    <button class="success btn px-4 py-2 rounded">Success</button>
                    <button class="warning btn px-4 py-2 rounded">Warning</button>
                    <button class="danger btn px-4 py-2 rounded">Danger</button>
                    <button class="info btn px-4 py-2 rounded">Info</button>
                    <button
                        class="lighter border border-lighter px-4 py-2 rounded bg-background">Outline</button>
                </div>
            </div>

            <!-- Form Elements -->
            <div class="mb-8">
                <div class="text-lg font-semibold mb-3">Form Elements</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-light rounded-lg p-4 space-y-4">
                        <div>
                            <label class="block mb-1 text-sm">Input Field</label>
                            <input type="text" class="w-full p-2 border border-light rounded bg-background"
                                placeholder="Enter text" />
                        </div>
                        <div>
                            <label class="block mb-1 text-sm">Select Field</label>
                            <select class="w-full p-2 border border-light rounded bg-background">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div>
                            <label class="block mb-1 text-sm">Textarea</label>
                            <textarea class="w-full p-2 border border-light rounded bg-background" rows="3"
                                placeholder="Enter text"></textarea>
                        </div>
                    </div>
                    <div class="border border-light rounded-lg p-4 space-y-4">
                        <div>
                            <label class="block mb-2 text-sm">Checkbox Group</label>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Option 1</span>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="mr-2" />
                                    <span class="text-sm">Option 2</span>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" class="mr-2" checked />
                                    <span class="text-sm">Option 3</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm">Radio Buttons</label>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input type="radio" name="radio-group" class="mr-2" />
                                    <span class="text-sm">Option 1</span>
                                </div>
                                <div class="flex items-center">
                                    <input type="radio" name="radio-group" class="mr-2" />
                                    <span class="text-sm">Option 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cards & Alerts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card Component -->
                <div class="border border-light rounded-lg p-4 bg-background">
                    <div class="text-lg font-semibold mb-2">Card</div>
                    <p class="mb-3 text-sm">
                        A sample card component using background and border utilities.
                    </p>
                    <button class="success btn px-3 py-1 rounded text-sm">Action</button>
                </div>

                <!-- Alerts -->
                <div class="border border-light rounded-lg p-4 bg-background">
                    <div class="text-lg font-semibold mb-2">Alerts</div>
                    <div class="space-y-3 mt-3">
                        <div class="success p-3 rounded text-sm">
                            <strong>Success!</strong> Operation completed.
                        </div>
                        <div class="warning p-3 rounded text-sm">
                            <strong>Warning!</strong> Please review.
                        </div>
                        <div class="danger p-3 rounded text-sm">
                            <strong>Error!</strong> Something went wrong.
                        </div>
                        <div class="info p-3 rounded text-sm">
                            <strong>Info:</strong> Additional details here.
                        </div>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="border border-light rounded-lg p-4 bg-background">
                    <div class="text-lg font-semibold mb-2">Progress</div>
                    <div class="mt-4">
                        <div class="w-full bg-lighter rounded-full h-2.5 mb-2">
                            <div class="success h-2.5 rounded-full" style="width: 65%"></div>
                        </div>
                        <div class="flex justify-between text-xs mb-3">
                            <span>In Progress</span>
                            <span>65%</span>
                        </div>
                        <div class="w-full bg-lighter rounded-full h-2.5 mb-2">
                            <div class="warning h-2.5 rounded-full" style="width: 40%"></div>
                        </div>
                        <div class="flex justify-between text-xs mb-3">
                            <span>Caution</span>
                            <span>40%</span>
                        </div>
                        <div class="w-full bg-lighter rounded-full h-2.5 mb-2">
                            <div class="danger h-2.5 rounded-full" style="width: 90%"></div>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span>Critical</span>
                            <span>90%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- SECTION 5: UTILITY REFERENCE                                 -->
        <!-- ============================================================ -->
        <div class="mb-8">
            <div class="text-2xl font-bold mb-2 border-b border-lighter pb-2">Utility Reference</div>
            <div class="text-sm mb-6">Complete list of available color utilities</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Brand Utilities -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Brand Utilities</div>
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-lighter">
                                <th class="text-left py-1">Class</th>
                                <th class="text-left py-1">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">prim</td>
                                <td class="py-2">Primary brand color</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">sec</td>
                                <td class="py-2">Secondary brand color</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">ter</td>
                                <td class="py-2">Tertiary brand color</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Background Utilities -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Background Utilities</div>
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-lighter">
                                <th class="text-left py-1">Class</th>
                                <th class="text-left py-1">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">background</td>
                                <td class="py-2">Main background surface</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">light</td>
                                <td class="py-2">Dark text on light bg</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">semilight / l2</td>
                                <td class="py-2">Medium grey tones</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">lighter / l3</td>
                                <td class="py-2">Light grey surfaces</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">superlight / l4</td>
                                <td class="py-2">Very light accents</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Semantic Utilities -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Semantic Utilities</div>
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-lighter">
                                <th class="text-left py-1">Class</th>
                                <th class="text-left py-1">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono text-success">success</td>
                                <td class="py-2">Positive status</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono text-warning">warning</td>
                                <td class="py-2">Caution status</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono text-danger">danger</td>
                                <td class="py-2">Error status</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono text-info">info</td>
                                <td class="py-2">Information status</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Alias Utilities -->
                <div class="border border-light rounded-lg p-4">
                    <div class="text-sm font-semibold mb-3">Alias Utilities (Short Names)</div>
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-lighter">
                                <th class="text-left py-1">Class</th>
                                <th class="text-left py-1">Equivalent To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">l1</td>
                                <td class="py-2">= light</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">l2</td>
                                <td class="py-2">= semilight</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">l3</td>
                                <td class="py-2">= lighter</td>
                            </tr>
                            <tr class="border-b border-superlight">
                                <td class="py-2 font-mono">l4</td>
                                <td class="py-2">= superlight</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
.btn {
    cursor: pointer;
}

.btn:hover {
    opacity: 0.9;
}
</style>
