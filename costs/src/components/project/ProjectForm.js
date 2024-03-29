import { useEffect, useState } from "react"

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText, handleSubmit, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((respo) => respo.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.error(err))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ?? ""} required />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira orçamento total" handleOnChange={handleChange} value={project.budget ?? ""} required />
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""} required />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;