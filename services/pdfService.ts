
// This assumes jsPDF and html2canvas are loaded from a CDN in index.html
declare const jspdf: any;
declare const html2canvas: any;

export const exportToPdf = (elementId: string, fileName: string): void => {
  const input = document.getElementById(elementId);
  if (!input) {
    console.error(`Element with id "${elementId}" not found.`);
    alert("Error: Could not find content to export.");
    return;
  }

  alert("Generating PDF... this may take a moment.");

  html2canvas(input, {
    scale: 2, // Higher scale for better quality
    useCORS: true,
  }).then((canvas: HTMLCanvasElement) => {
    const imgData = canvas.toDataURL('image/png');
    
    // Using jsPDF from window object
    const { jsPDF } = jspdf;
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasWidth / canvasHeight;

    let imgWidth = pdfWidth;
    let imgHeight = imgWidth / ratio;
    
    // If image is too tall, fit to page height instead
    if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * ratio;
    }

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(fileName);
  }).catch((error: any) => {
    console.error("Error generating PDF:", error);
    alert("An error occurred while generating the PDF. Please try again.");
  });
};
