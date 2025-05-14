import React, { useState } from 'react';

type Task = {
  id: number;
  name: string;
  heading: string;
};

type Topic = {
  id: number;
  name: string;
  heading: string;
  tasks: Task[];
};

type Chapter = {
  id: number;
  name: string;
  heading: string;
  topics: Topic[];
};

const chapters: Chapter[] = [
  {
    id: 1,
    name: 'Chapter 1',
    heading: 'Introduction to React',
    topics: [
      {
        id: 1,
        name: 'Topic 1',
        heading: 'JSX',
        tasks: [
          { id: 1, name: 'Task 1', heading: 'JSX Syntax' },
          { id: 2, name: 'Task 2', heading: 'JSX Expressions' },
        ],
      },
      {
        id: 2,
        name: 'Topic 2',
        heading: 'Components',
        tasks: [
          { id: 1, name: 'Task 1', heading: 'Functional Components' },
          { id: 2, name: 'Task 2', heading: 'Class Components' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Chapter 2',
    heading: 'State and Props',
    topics: [
      {
        id: 1,
        name: 'Topic 1',
        heading: 'useState',
        tasks: [
          { id: 1, name: 'Task 1', heading: 'State Basics' },
          { id: 2, name: 'Task 2', heading: 'Updating State' },
        ],
      },
      {
        id: 2,
        name: 'Topic 2',
        heading: 'Props Drilling',
        tasks: [
          { id: 1, name: 'Task 1', heading: 'Prop Passing' },
          { id: 2, name: 'Task 2', heading: 'Drilling Solution' },
        ],
      },
    ],
  },
];

const Accordion: React.FC = () => {
  const [openChapterId, setOpenChapterId] = useState<number | null>(null);
  const [openTopicId, setOpenTopicId] = useState<number | null>(null);

  const toggleChapter = (id: number) => {
    setOpenChapterId((prev) => (prev === id ? null : id));
    setOpenTopicId(null); // Close any open topic when switching chapters
  };

  const toggleTopic = (id: number) => {
    setOpenTopicId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chapter No and Chapter</h2>
      {chapters.map((chapter) => (
        <div key={chapter.id} style={{ marginBottom: '10px' }}>
          <div
            onClick={() => toggleChapter(chapter.id)}
            style={{
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <strong>{chapter.name}</strong> - {chapter.heading}
          </div>

          {openChapterId === chapter.id && (
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
              {chapter.topics.map((topic) => (
                <div key={topic.id} style={{ marginBottom: '5px' }}>
                  <div
                    onClick={() => toggleTopic(topic.id)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: '#e0e0e0',
                      padding: '8px',
                      borderRadius: '4px',
                    }}
                  >
                    {topic.name} - {topic.heading}
                  </div>

                  {openTopicId === topic.id && (
                    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                      {topic.tasks.map((task) => (
                        <div
                          key={task.id}
                          style={{
                            backgroundColor: '#d0d0d0',
                            margin: '4px 0',
                            padding: '6px',
                            borderRadius: '4px',
                          }}
                        >
                          {task.name} - {task.heading}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
