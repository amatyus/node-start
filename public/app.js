document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
})

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'edit' ) {
        const id = event.target.dataset.id
        const title = prompt('Введите новое название');

        if (title === null) {
            return
        }
        edit(id, title)


    }
})


async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(id, title) {
    await fetch(`/${id}`, {
    method: "PUT",
        body: JSON.stringify({title}),
        headers: {
            "Content-Type": "application/json",
        }
})
}