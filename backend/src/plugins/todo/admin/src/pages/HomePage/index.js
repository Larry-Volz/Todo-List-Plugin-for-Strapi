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


const HomePage = () => {
  const [ todoData, setTodoData ] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);

  }

  return (
    
    <Layout>

      <BaseHeaderLayout
        title="Larry's To Do Plugin"
        subtitle="Keeping it real and organized since 2022"
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
          <h2>You have {todoData.length} count</h2>
        )}

      </ContentLayout>
      
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}

    </Layout>
  );
};

export default memo(HomePage);
