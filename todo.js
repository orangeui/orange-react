// Do we want to create code blocks in react?

function CodeBlock (props) {
    return (
        <div className="code-block"></div>
    )
}

function DocsItem (props) {
    let title = props.title ? <h2>{props.title}</h2> : null
    return (
        <div className="docs__item">
            {title}

            {props.children}

            <code-block v-if="code" :code="code" />

            <code-block v-if="css_code" :code="css_code" code_markup="SCSS" />
        </div>
    )
}
