/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout, HeaderLayout, Layout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button"
import Plus from "@strapi/icons/Plus"
import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";

import TodoTable from "../../components/TodoTable";


const HomePage = () => {

  //testing > 0
//   const [ todoData, setTodoData ] = useState([
//     {
//     id: 1,
//     name: "test"
//     },
//     {
//       id: 2,
//       name: "2nd test"
//       },
// ]);

const [ todoData, setTodoData ] = useState([]);


  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);

  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }

  return (
    
    <Layout>

      <BaseHeaderLayout
        title="Larry's To Do Plugin"
        subtitle="TCB & Get 'er done"
        as="h2"
      />
      
      <ContentLayout>
      
      {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
          {/* <h2>You have {todoData.length} count</h2> */}
          <TodoCount count = {todoData.length} />

          {
          
           <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            /> }

          </>
        )}

      </ContentLayout>
      
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}

    </Layout>
  );
};

export default memo(HomePage);
