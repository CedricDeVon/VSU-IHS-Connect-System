import pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize pdfMake with fonts
  // if (typeof window !== 'undefined') {
  //   pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //   pdfMake.fonts = {
  //     Roboto: {
  //       normal: 'Roboto-Regular.ttf',
  //       bold: 'Roboto-Medium.ttf',
  //       italics: 'Roboto-Italic.ttf',
  //       bolditalics: 'Roboto-MediumItalic.ttf'
  //     }
  //   };
  // }
  // Provide pdfMake globally via `nuxtApp.provide`
  nuxtApp.provide('pdfMake', pdfMake);
});

