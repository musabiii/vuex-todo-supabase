import { supabase } from "./supabase";

export const getItems = async () => {
    let { data: todos, error } = await supabase
    .from('todos')
    console.log(error)
    console.log(todos)

    let { data: accessories, error1 } = await supabase
    .from('accessories')
    console.log(error1)
    console.log(accessories);

    return todos;
};
