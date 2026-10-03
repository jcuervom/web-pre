// Adaptación de las acciones de servidor para la copia estática.
document.addEventListener('DOMContentLoaded', function () {
  PrimeFaces.ab = function (options) {
    const source = options.s || '';
    if (source.includes('btnvalidar')) {
      const certificate = document.getElementById('validacionPazySalvoV2:numeroCertificado').value.trim();
      const documentNumber = document.getElementById('validacionPazySalvoV2:numeroTercero').value.trim();
      if (certificate === '284056' && documentNumber === '71361717') {
        PF('modal-certificado').show();
      } else {
        alert('Esta copia local contiene únicamente el certificado descargado. Para consultar otros certificados, acceda al portal original de la Alcaldía.');
      }
    } else if (source === 'validacionPazySalvoV2:j_idt66') {
      document.getElementById('validacionPazySalvoV2:numeroCertificado').value = '';
      document.getElementById('validacionPazySalvoV2:numeroTercero').value = '';
    } else if (source === 'j_idt8:j_idt10') {
      window.location.href = 'index.html';
    } else if (source === 'j_idt8:j_idt38') {
      alert('El acceso de usuarios requiere el portal original de la Alcaldía.');
    }
  };
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (event) { event.preventDefault(); });
  });
});
