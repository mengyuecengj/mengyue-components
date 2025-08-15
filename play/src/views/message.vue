<template>
  <div class="demo-container">
    <h1>Message Component Demo</h1>
    
    <section>
      <h2>Basic Usage - Different Types</h2>
      <button @click="showInfo">Show Info</button>
      <button @click="showSuccess">Show Success</button>
      <button @click="showWarning">Show Warning</button>
      <button @click="showError">Show Error</button>
    </section>

    <section>
      <h2>With Duration and Close Button</h2>
      <button @click="showWithDuration">Show with 5s Duration</button>
    </section>

    <section>
      <h2>Different Positions</h2>
      <button @click="showTopRight">Top Right (Default)</button>
      <button @click="showTopLeft">Top Left</button>
      <button @click="showTopCenter">Top Center</button>
      <button @click="showBottomRight">Bottom Right</button>
      <button @click="showBottomLeft">Bottom Left</button>
      <button @click="showBottomCenter">Bottom Center</button>
    </section>

    <section>
      <h2>Custom Offset and zIndex</h2>
      <button @click="showWithZIndex">Show with Custom zIndex (10000)</button>
    </section>

    <section>
      <h2>Long Text for Wrap Test (Should Wrap at 200px)</h2>
      <button @click="showLongText">Show Long Text Message</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { message } from '../../../packages/components';  // 调整路径根据你的项目结构

// Basic Types
function showInfo() {
  message.info('This is an info message');
}

function showSuccess() {
  message.success('This is a success message');
}

function showWarning() {
  message.warning('This is a warning message');
}

function showError() {
  message.error('This is an error message');
}

// Duration and Close
function showWithDuration() {
  message.info({ content: 'This message lasts 5 seconds', duration: 5000 });
}

// Positions
function showTopRight() {
  message.info({ content: 'Top Right Position', position: 'top-right' });
}

function showTopLeft() {
  message.info({ content: 'Top Left Position', position: 'top-left' });
}

function showTopCenter() {
  message.info({ content: 'Top Center Position', position: 'top-center' });
}

function showBottomRight() {
  message.info({ content: 'Bottom Right Position', position: 'bottom-right' });
}

function showBottomLeft() {
  message.info({ content: 'Bottom Left Position', position: 'bottom-left' });
}

function showBottomCenter() {
  message.info({ content: 'Bottom Center Position', position: 'bottom-center' });
}

function showWithZIndex() {
  message.info({ content: 'Custom zIndex 10000', zIndex: 10000 });
}

// Long Text
function showLongText() {
  message.info('This is a very long message that should wrap automatically when it exceeds 200px width. Testing wrapping: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
}
</script>

<style>
.demo-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

section {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>