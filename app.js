const dark = document.getElementById('space');
const container = document.querySelector('.container')
const header = document.querySelector('.header')
const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')

function DarkMode() {
    container.style.backgroundColor = 'black';
    container.style.color = 'white';
    header.style.backgroundColor = 'black';
    btn.style.backgroundColor = 'black'
    btn1.style.backgroundColor = 'black'
    btn.style.color='white'
    btn1.style.color='white'
    btn.style.boxShadow= 'black'
}

function LightMode() {
    container.style.backgroundColor = '#e0e0e0';
    container.style.color = 'black';
    header.style.backgroundColor = '#e0e0e0';
    btn.style.backgroundColor = '#e0e0e0'
    btn1.style.backgroundColor = '#e0e0e0'
    btn.style.color='black'
    btn1.style.color='black'
    btn.style.boxShadow= '#e0e0e0'
}