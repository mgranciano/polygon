export const diaHabilAnterior = (fecha:any) => {
    const fechaObj = new Date(fecha);
    const diaDeLaSemana = fechaObj.getDay();

    if (diaDeLaSemana == 0 || diaDeLaSemana == 6) {
        var diasARestar = diaDeLaSemana == 0 ? 2 : 1;
        fechaObj.setDate(fechaObj.getDate() - diasARestar);
    }

    const yyyy = fechaObj.getFullYear();
    const mm = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const dd = String(fechaObj.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
}