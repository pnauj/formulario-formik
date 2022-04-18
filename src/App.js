import React, { useState } from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  const [Formulario, setFormulario] = useState(false);
  return (
    <>
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

          if (!valores.nombre) {
            errores.nombre = "Por favor completa el campo";
          } else if (!/^[A-Za-z\s?]+$/.test(valores.nombre)) {
            errores.nombre = "Por favor completa el campo de nombre";
          }
          if (!valores.profesional) {
            errores.profesional = "Por favor completa el campo";
          } else if (!/^[A-Za-z\s?]+$/.test(valores.profesional)) {
            errores.profesional = "Por favor completa el campo de nombre";
          }
          if (!valores.detalle) {
            errores.detalle = "Por favor completa el campo";
          } else if (!/^[A-Za-z\s?]+$/.test(valores.detalle)) {
            errores.detalle = "Por favor completa el campo de nombre";
          }
          if (!valores.horario) {
            errores.horario = "Por favor completa el campo";
          } else if (
            !/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(valores.horario)
          ) {
            errores.horario = "Por favor completa el campo de nombre";
          }
          if (!valores.fecha) {
            errores.fecha = "Por favor completa el campo";
          } else if (
            !/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(
              valores.fecha
            )
          ) {
            errores.fecha = "Por favor completa el campo de nombre";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setFormulario(true);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escriba el nombre de su mascota"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label>Profesional</label>
              <Field
                type="text"
                id="profesional"
                name="profesional"
                placeholder="Escriba el nombre del Profesional"
              />
              <ErrorMessage
                name="profesional"
                component={() => (
                  <div className="error">{errors.profesional}</div>
                )}
              />
            </div>
            <div>
              <label>Detalle</label>
              <Field
                as='textarea'
                id="detalle"
                name="detalle"
                placeholder="Escriba el detalle de la cita"
              />
              <ErrorMessage
                name="detalle"
                component={() => <div className="error">{errors.detalle}</div>}
              />
            </div>
            <div>
              <label>Horario</label>
              <Field
                type="time"
                id="horario"
                name="horario"
                placeholder="Elija el horario"
              />
              <ErrorMessage
                name="horario"
                component={() => <div className="error">{errors.horario}</div>}
              />
            </div>
            <div>
              <label>Fecha</label>
              <Field type="date" id="fecha" name="fecha" />
              <ErrorMessage
                name="fecha"
                component={() => <div className="error">{errors.fecha}</div>}
              />
            </div>
            <button type="submit">Guardar</button>
            {Formulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
