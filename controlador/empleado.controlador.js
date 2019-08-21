const Empleado = require('../modelo/empleado');

const empleadoControl = {};

empleadoControl.getEmpleados = async(req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}

empleadoControl.crearEmpleado = async(req, res) => {
    const empleados = new Empleado({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        cargo: req.body.cargo,
        salario: req.body.salario
    });
    console.log(empleados);
    await empleados.save();
    console.log('emplado guardado');
    res.json({
        'status': 'empleado guardado'
    })

}


empleadoControl.getEmpledo = async(req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    console.log(req.params);
    res.json(empleado);

}

empleadoControl.editarEmpleado = async(req, res) => {
    const { _id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        cargo: req.body.cargo,
        salario: req.body.salario
    }
    await Empleado.findByIdAndUpdate(_id, { $set: empleado }, { new: true });
    res.json({ status: 'empleado modificado' });


}

empleadoControl.deleteEmpleado = async(req, res) => {
    await Empleado.findByIdAndDelete(req.params._id);
    res.json({ status: 'empleado eliminado' })

}






module.exports = empleadoControl;