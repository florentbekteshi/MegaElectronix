/*Details*/
export interface IeditList {
  id: number;
  paragraph: string | number;
  placeholder: string;
  type: string;
}
export interface IattributeList {
  name: string;
  icon: string;
}

/*Subtask*/
export interface IsubTask {
  id: number;
  desc: string;
  completed: boolean;
  isEditing: boolean;
}

/*Main*/
export interface ItabsItem {
  name: string;
  active: boolean;
  icon: string;
}

