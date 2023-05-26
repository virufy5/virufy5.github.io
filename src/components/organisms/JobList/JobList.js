import React, { useState, useEffect } from "react"
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'

export default function JobList() {

  const [posts, setPosts] = useState([]);

/*   const url = 'https://scidroidgames-gmailcom-cms.payloadcms.app/api/positions'

    const fetchingData = async () => {
      const response = await fetch(url)
      const data = await response.json();
      console.log( "FETCHING data", data);
    } */

    async function fetchData() {
      try {
        const res = await fetch('https://scidroidgames-gmailcom-cms.payloadcms.app/api/positions');
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(); 

  //fetchingData();

  const List = [
    {
      name: 'Engineering',
      jobVacancys: [
        {
          title: "Engineering Manager",
          link: "1"
        },
      ]
    },
    {
      name: 'Data',
      jobVacancys: [
        {
          title: "Data Privacy Intern",
          link: "2"
        },
        {
          title: "Data Privacy Manager",
          link: "3"
        },
        {
          title: "Director of Data Science",
          link: "4"
        },
        {
          title: "Data Visualization Engineer",
          link: "5"
        },
      ]
    },
    {
      name: 'Management',
      jobVacancys: [
        {
          title: "Business Manager",
          link: "6"
        },
        {
          title: "Project Manager",
          link: "7"
        },
      ]
    },
    {
      name: 'Human Resrouces',
      jobVacancys: [
        {
          title: "Human Resources Partner",
          link: "8"
        },
        {
          title: "Technical Recruiter",
          link: "9"
        },
      ]
    },
  ]

  const API = [
    {
      id:"646d2d6c604ea48db9320b5a",
      title: "Deserunt sunt eu qu",
      category: {
        id:"646d2c9e32c3806c71f7b399",
        title: "Engineering",
        createdAt: "2023-05-23T21:14:06.274Z",
        updatedAt: "2023-05-23T21:14:06.274Z"
      },
      publishedDate: "2023-05-23T21:17:32.283Z",
      summary: "Laboriosam anim adi",
      link: "Eos laboris duis iur",
      slug: "minus-aut-vel-sint-v",
      meta: {},
      _status: "published",
      createdAt: "2023-05-23T21:17:32.289Z",
      updatedAt: "2023-05-23T21:17:46.652Z",
      desiredSkills: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      hours: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      minimunQualifications: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      responsabilities: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id:"646d2d1032c3806c71f7b3b6",
      title: "Quia laboris ratione",
      category: {
        id:"646d2ca9604ea48db9320b12",
        title: "Data",
        createdAt: "2023-05-23T21:14:17.125Z",
        updatedAt: "2023-05-23T21:14:17.125Z"
      },
      publishedDate: "2023-05-23T21:16:00.617Z",
      summary: "Magnam quibusdam lab",
      link: "Ex voluptatem volupt",
      slug: "inventore-porro-dolo",
      meta: {},
      _status: "published",
      createdAt: "2023-05-23T21:16:00.627Z",
      updatedAt: "2023-05-23T21:16:23.519Z",
      desiredSkills: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      hours: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      minimunQualifications: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ],
      responsabilities: [
        {
          type: "ul",
          children: [
            {
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ],
              type: "li"
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            },
            {
              type: "li",
              children: [
                {
                  text: "Dolor illum cumque Dolor illum cumque Dolor illum cumque"
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  const positions = [
    {
      id: 1,
      title: "Engineering Manager",
      category: "Engineering",
    },
    {
      id: 2,
      title: "Data Privacy Intern",
      category: "Data",
    },
    {
      id: 3,
      title: "Data Privacy Manager",
      category: "Data",
    },
    {
      id: 4,
      title: "Director of Data Science",
      category: "Data",
    },
    {
      id: 5,
      title: "Data Visualization Engineer",
      category: "Data",
    },
    {
      id: 6,
      title: "Business Manager",
      category: "Management",
    },
    {
      id: 7,
      title: "Project Manager",
      category: "Management",
    }
  ];

  function formatPositions(positions) {
    const categories = [...new Set(positions.map(position => position.category))]
    return categories.reduce((acc, category) => {
      const _positions = positions.filter(position => position.category === category)
      return [...acc, { category: category, positions: _positions }]
    }, [])
  }

  var positionsFix = []

  function _formatPositions(API) {
    const categories = [...new Set(API.map(Pos => Pos.category.title))]
    return categories.reduce((acc, category) => {
      const _positions = API.filter(Pos => Pos.category.title === category)
      return positionsFix = [...acc, { category: category, positions: _positions }]
    }, [])
  } 

  _formatPositions(API)

  useEffect(() => {
    //console.log(positionsFix);
  }, [positionsFix])

  //console.log( "PositionsEX", formatPositions(positions))
  //console.log( "Positions APIIII", API)
  //console.log( "Positions JB", List)

  return (
    <div className='my-12 w-11/12 mx-8'>

      {List.map(({ name, jobVacancys, id }) => (

        <div key={id} className='w-[100%] '>
          <Title
            TitleClassProps={"text-[#3074DC] my-[40px]"}
            Text={name}
            H={"h4"}
          />

          {jobVacancys.map(({ title, link, id }) => (
            <>
              <div key={id} className='flex w-[100%] mb-[37px]'>
                <div className='flex flex-1 justify-start items-center'>
                  <Text
                    TextClassProps={""}
                    Text={title}
                    Style={"normal"}
                  />
                </div>

                <div className='flex flex-1 justify-end'>
                  <Button
                    size="medium"
                    type="primary"
                    path={`/JobListing/${link}`}
                    label="APPLY"
                  />
                </div>

              </div>
              <hr className="flex w-[100%] h-px mx-auto my-4 border-0 rounded bg-[#BBBBBB]" />
            </>
          ))}

        </div>
      ))}

{positionsFix.map(({ category, positions, id }) => (

<div key={id} className='w-[100%] '>
  <Title
    TitleClassProps={"text-[#3074DC] my-[40px]"}
    Text={category}
    H={"h4"}
  />

   {positions.map(({ title, category }) => (
    <>
      <div key={category.id} className='flex w-[100%] mb-[37px]'>
        <div className='flex flex-1 justify-start items-center'>
          <Text
            TextClassProps={""}
            Text={title}
            Style={"normal"}
          />
        </div>

        <div className='flex flex-1 justify-end'>
          <Button
            size="medium"
            type="primary"
            path={`/JobListing/${category.id}`}
            label="APPLY"
          />
        </div>

      </div>
      <hr className="flex w-[100%] h-px mx-auto my-4 border-0 rounded bg-[#BBBBBB]" />
    </>
  ))}  

</div>
))}      

    </div>
  )
}
