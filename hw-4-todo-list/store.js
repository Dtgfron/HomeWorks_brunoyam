const store = {
  get: function () {
    const _task = localStorage.getItem('tasksList');
    const _id = localStorage.getItem('id');

    const taskList = _task === null ? [] : JSON.parse(_task);
    const id = _id === null ? 0 : Number(_id);
    return {
      taskList: taskList,
      id: id
    }
  },
  update: function (taskList, id) {
    localStorage.setItem('tasksList', JSON.stringify(taskList));

    if (typeof id === 'number') {
      localStorage.setItem('id', id);
    }
  }
};
