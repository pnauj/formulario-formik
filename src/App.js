import React from "react";
import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <>
    //video 32minutos
      <Formik
        initialValues={{
          nombre: "",
          profesional: "",
          detalle: "",
          horario: "",
          fecha: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre || !valores.profesional || !valores.detalle) {
            errores.nombre = "Por favor completa el campo";
            errores.profesional = "Por favor completa el campo";
            errores.detalle = "Por favor completa el campo";
          } else if (
            !/^[A-Za-z\s?]+$/.test(valores.nombre) ||
            !/^[A-Za-z\s?]+$/.test(valores.profesional) ||
            !/^[A-Za-z\s?]+$/.test(valores.detalle)
          ) { 
            errores.nombre = "Por favor completa el campo de nombre";
            errores.profesional = "Por favor completa el campo";
            errores.detalle = "Por favor completa el campo";
          }
          return errores;
        }}
        onSubmit={(valores) => {
          console.log(valores);
          console.log("formulario enviado");
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escriba el nombre de su mascota"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label>Profesional</label>
              <input
                type="text"
                id="profesional"
                name="profesional"
                placeholder="Escriba el nombre del Profesional"
                value={values.profesional}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.profesional && (
                <div className="error">{errors.profesional}</div>
              )}
            </div>
            <div>
              <label>Detalle</label>
              <textarea
                id="detalle"
                name="detalle"
                placeholder="Escriba el detalle de la cita"
                value={values.detalle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.detalle && <div className="error">{errors.detalle}</div>}
            </div>
            <div>
              <label>Horario</label>
              <input
                type="time"
                id="horario"
                name="horario"
                placeholder="Elija el horario"
                value={values.horario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Fecha</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={values.fecha}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit">Guardar</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
