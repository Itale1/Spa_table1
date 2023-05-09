const TableHead = ({currentSort, currentField, setCurrentField, setCurrentSort}) => {

    const buttonsData = [
        {name: 'name', title: 'Название'},
        {name: 'quanity', title: 'Количество'},
        {name: 'distance', title: 'Расстояние'},
    ]

    // rendering buttons
    const buttons = buttonsData.map((item, i) => {
        const {name, title} = item
        const isCurrent = currentField === name
        const ascArrowBtn = isCurrent && currentSort === 'asc' ? '⬆' : ''
        const descArrowBtn = isCurrent && currentSort === 'desc' ? '⬇' : ''
        const defaultBtn = !(isCurrent && currentSort) ? '⏹️' : ''
        return (
            <th key={i}
                className="table-control"
                data-filter={name}
                onClick={(e) => setSort(e)}
            >
                {title + ascArrowBtn + descArrowBtn + defaultBtn}
            </th>
        )
    })

    const setSort = (e) => {
        switch(currentSort) {
            case '':
                setCurrentSort('asc')
                break;
            case 'asc':
                setCurrentSort('desc')
                break;
            case 'desc':
            default:
                setCurrentSort('')
                break;
        }
        setCurrentField(e.currentTarget.getAttribute('data-filter'))
    }

    return (
        <thead>
            <tr>
                <th>
                    Дата
                </th>
                {buttons}
            </tr>
        </thead>
    )
}

export default TableHead;

// import React from 'react';
// import { useState } from 'react';

// export default function TableHead({ filterSubmit, onReset }) {
// 	const [ name, setName ] = useState('');
// 	const [ law, setLaw ] = useState('');
// 	const [ argument, setArgument ] = useState('');

// 	function handleNameChange(e) {
// 		setName(e.target.value);
// 	}
// 	function handleLawChange(e) {
// 		setLaw(e.target.value);
// 	}
// 	function handleArgumentChange(e) {
// 		setArgument(e.target.value);
// 	}

// 	function onClearFilter() {
// 		setName('');
// 		setLaw('');
// 		setArgument('');
// 		onReset();
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		filterSubmit({ name, law, argument });
// 	}

// 	return (
// 		<form className="table-form" onSubmit={handleSubmit}>
// 			<select name="name" value={name} onChange={handleNameChange} required>
// 				<option value="">Поле...</option>
// 				<option value="name">Название</option>
// 				<option value="quanity">Количество</option>
// 				<option value="distance">Расстояние</option>
// 			</select>
// 			<select name="law" value={law} onChange={handleLawChange} required>
// 				<option value="">Условие...</option>
// 				<option value="equal">Равно</option>
// 				<option value="contain">Содержит</option>
// 				<option value="greater">Больше</option>
// 				<option value="less">Меньше</option>
// 			</select>
// 			<input
// 				name="argument"
// 				value={argument}
// 				onChange={handleArgumentChange}
// 				type="text"
// 				placeholder="Значение"
// 				required
// 			/>
// 			<button className="table-form__button" type="reset" onClick={onClearFilter}>
// 				Сброс
// 			</button>
// 			<button className="table-form__button" type="submit">
// 				Фильтр
// 			</button>
// 		</form>
// 	);
// }