import { unique_id } from '../helpers/create.js';
import Tree from '../utils/Tree.js';
import Node from '../utils/Node.js';

export const createSymbols = {
  addInput: Symbol('ADD_INPUT'),
  removeInput: Symbol('REMOVE_INPUT'),
  addChild: Symbol('ADD_CHILD'),
}

export const addInput = () => {
  const data = {
    question: '',
    type: '',
    response: {},
  }

  const input = new Tree(data);

  return {
    type: createSymbols.addInput,
    input,
    id: unique_id()
  }
}

export const removeInput = (id) => {
  return {
    type: createSymbols.removeInput,
    id
  }
}

export const addChild = (parent) => {
  const child = {
    data: {
      condition: '',
      response: '',
      type: '',
      response: {},
    },
  }

  return {
    type: createSymbols.addChild,
    child,
    id
  }
}
