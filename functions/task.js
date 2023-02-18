const getTaskList = async (search) =>{ // фунция получения списка задач
    let list = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          prioritet: 'Авария',
          dateStart: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d73',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d74',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d75',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d76',
          prioritet: 'Важная',
          title: 'Тест задачи 12. Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d77',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d78',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d79',
          prioritet: 'Важная',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d80',
          prioritet: 'Средняя',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d81',
          prioritet: 'Средняя',
          title: 'Прежде всего понимание сущности ресурсосберегающих технологий требует определения и уточнения существующий финансовых и административных условий.',
          description: 'Не вызывает сомнений, что постоянное информационно-пропогандистское обеспечение нашей деятельности напрямую зависит от прогресса профессионального общества. Следует отметить, что социально-экономическое развитие представляет собой интересный эксперимент модели развития.',
        },
    ];
    if(search!=""){
        return list.filter(word => {
            if(word.id.toLowerCase().indexOf(search.toLowerCase())!==-1){
                return true
            }
            if(word.title.toLowerCase().indexOf(search.toLowerCase())!==-1){
                return true
            }
        })
    }else{
        return list;
    }
}



const AddTask = async (data) =>{ // фунция получения списка задач
    // Выполнить отправку на создание задачи
    return 24 //Вернуть id созданной задачи
}

module.exports = Object.freeze({
    getTaskList: getTaskList,
    AddTask: AddTask
});