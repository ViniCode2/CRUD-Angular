module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{html,ts}"
    ],
    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {},
    },

    variants: {
        extend: {},
    },
    
    plugins: [
        require ( 'tailwind-scrollbar' ) ( {  nocompatible : true  } ) 
    ],
}