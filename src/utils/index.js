import { supabase } from "./supabase";

export const getItems = async () => {
    let { data: todos, error } = await supabase
    .from('todos')
    console.log(error)
    console.log(todos)

    return todos;
};
