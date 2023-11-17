import Collapse from "@/app/components/Collapse"
import Image from "next/image"
import firstPassOnlyQueryImage from "@/public/firstPassOnlyQuery.PNG"
import completeQueryImage from "@/public/completeQuery.PNG"

export function FirstPassOnlyQuery() {

  const url = 'http://localhost:9200/rni-test-index/_search'

  const exampleQueryObject =
  {
    "query": {
      "bool": {
        "should": [
          {
            "match": {
              "name": JSON.stringify({ "data": 'Leonard Cohen', "entityType": "PERSON" })
            }
          },
          {
            "match": {
              "dob": "19340921"
            }
          }
        ]
      }
    }
  }
  const exampleQueryResult = {
    "took": 3,
    "timed_out": false,
    "_shards": {
      "total": 1,
      "successful": 1,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": {
        "value": 10,
        "relation": "eq"
      },
      "max_score": 10.4,
      "hits": [
        {
          "_index": "rni-test-index",
          "_id": "SJgO3YsBq75y0nEDyiHQ",
          "_score": 10.4,
          "_source": {
            "name": {
              "data": "Sandra Rosa Cervantes",
              "entityType": "PERSON"
            },
            "dob": "19170917",
            "ucn": "30148714-ec63-4899-9d7e-61d6c16c556c"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "R5gO3YsBq75y0nEDyiHQ",
          "_score": 9.2,
          "_source": {
            "name": {
              "data": "Guadalupe Jesusa Alicia Carla Aurora Villalobos",
              "entityType": "PERSON"
            },
            "dob": "19200824",
            "ucn": "42dc1e4f-d18c-4a93-8dff-262725b012dd"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "Q5gO3YsBq75y0nEDyiHQ",
          "_score": 7.0,
          "_source": {
            "name": {
              "data": "Angel Ruben Eliseo Flores",
              "entityType": "PERSON"
            },
            "dob": "19400327",
            "ucn": "59b302a3-24e0-41c7-aa26-9729e34ac836"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RJgO3YsBq75y0nEDyiHQ",
          "_score": 6.006122,
          "_source": {
            "name": {
              "data": "Selena Josefina Martinez",
              "entityType": "PERSON"
            },
            "dob": "19990612",
            "ucn": "96111870-8ff5-4a69-ae15-bbcfddb290a5"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RZgO3YsBq75y0nEDyiHQ",
          "_score": 5.260865,
          "_source": {
            "name": {
              "data": "Alejandro Clemente Armando Carlos Emiliano David Armando Eugenio Hector Demetrio Pacheco",
              "entityType": "PERSON"
            },
            "dob": "19890228",
            "ucn": "6fa87461-4ebf-4d95-a213-0d1f570c9b2e"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QZgO3YsBq75y0nEDyiHQ",
          "_score": 4.2,
          "_source": {
            "name": {
              "data": "Adriana Maribel Mendoza",
              "entityType": "PERSON"
            },
            "dob": "20010720",
            "ucn": "6099626f-ca6b-4613-9e7b-dfbe6fd6f680"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QpgO3YsBq75y0nEDyiHQ",
          "_score": 4.2,
          "_source": {
            "name": {
              "data": "Veronica Elsa Elvira Lara",
              "entityType": "PERSON"
            },
            "dob": "19561117",
            "ucn": "e0a5683e-2ee6-4434-940e-c52361a8b65e"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QJgO3YsBq75y0nEDyiHQ",
          "_score": 3.1,
          "_source": {
            "name": {
              "data": "Consuelo Sandra Leticia Graciela Sosa",
              "entityType": "PERSON"
            },
            "dob": "20101112",
            "ucn": "b52db9ee-8172-4acf-ba3c-4eb2498b9ecb"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "SZgO3YsBq75y0nEDyiHQ",
          "_score": 1.150582,
          "_source": {
            "name": {
              "data": "Valeria Clara Laura Ruth Silvia Graciela Vega",
              "entityType": "PERSON"
            },
            "dob": "19860205",
            "ucn": "b765ccfe-bf43-41d5-a8d6-31c9221a7638"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RpgO3YsBq75y0nEDyiHQ",
          "_score": 1.0,
          "_source": {
            "name": {
              "data": "Georgina Gabriela Suarez",
              "entityType": "PERSON"
            },
            "dob": "19590303",
            "ucn": "34280978-276f-4360-a4e6-a9420108885d"
          }
        }
      ]
    }
  }
  function ExampleResult() {
    return (
      <Collapse title="Example Result" defaultCollapsed={true}>
        <pre className="p-2">
          {JSON.stringify(exampleQueryResult, null, 2)}
        </pre>
      </Collapse>
    )
  }
  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on queries, see <a className=" text-blue-600" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html">the docs</a></li>
          <li className="list-item">This query will return a list of hits for the search</li>
          <li className="list-item italic">It will only execute the first pass of a query and not the actual RNI portion</li>
          <li className="list-item italic">Note that the result scores are whole numbers</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleScreenShot() {
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image
          src={firstPassOnlyQueryImage}
          width={1500}
          height={500}
          alt=""
        />
      </Collapse>
    )
  }

  return (
    <div>
      <p>To query the index, we will make a POST request to
        <p className="p-5">{url}</p>
        with the following body (in Postman, you can use the raw editor and select JSON):
      </p>
      <pre className="p-2">
        {JSON.stringify(exampleQueryObject, null, 2)}
      </pre>
      <ExampleResult />
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )
}

export function CompleteQuery() {
  const url = 'http://localhost:9200/rni-test-index/_search'

  const exampleQueryObject =
  {
    "size": 10,
    "query": {
      "bool": {
        "should": [
          {
            "match": {
              "name": JSON.stringify({ "data": 'Leonard Cohen', "entityType": "PERSON" })
            }
          },
          {
            "match": {
              "dob": "19340921"
            }
          }
        ]
      }
    },
    "rescore": {
      "window_size": 10,
      "query": {
        "rescore_query": {
          "function_score": {
            "doc_score": {
              "fields": {
                "name": {
                  "query_value": {
                    "data": "Leonard Cohen",
                    "entityType": "PERSON"
                  },
                },
                "dob": {
                  "query_value": "19340921",
                }
              }
            }
          }
        },
        "query_weight": 0,
        "rescore_query_weight": 1
      }
    }
  }
  const exampleQueryResult = {
    "took": 9,
    "timed_out": false,
    "_shards": {
      "total": 1,
      "successful": 1,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": {
        "value": 10,
        "relation": "eq"
      },
      "max_score": 0.41983446,
      "hits": [
        {
          "_index": "rni-test-index",
          "_id": "Q5gO3YsBq75y0nEDyiHQ",
          "_score": 0.41983446,
          "_source": {
            "name": {
              "data": "Angel Ruben Eliseo Flores",
              "entityType": "PERSON"
            },
            "dob": "19400327",
            "ucn": "59b302a3-24e0-41c7-aa26-9729e34ac836"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RZgO3YsBq75y0nEDyiHQ",
          "_score": 0.35295084,
          "_source": {
            "name": {
              "data": "Alejandro Clemente Armando Carlos Emiliano David Armando Eugenio Hector Demetrio Pacheco",
              "entityType": "PERSON"
            },
            "dob": "19890228",
            "ucn": "6fa87461-4ebf-4d95-a213-0d1f570c9b2e"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "R5gO3YsBq75y0nEDyiHQ",
          "_score": 0.3277357,
          "_source": {
            "name": {
              "data": "Guadalupe Jesusa Alicia Carla Aurora Villalobos",
              "entityType": "PERSON"
            },
            "dob": "19200824",
            "ucn": "42dc1e4f-d18c-4a93-8dff-262725b012dd"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "SJgO3YsBq75y0nEDyiHQ",
          "_score": 0.27428454,
          "_source": {
            "name": {
              "data": "Sandra Rosa Cervantes",
              "entityType": "PERSON"
            },
            "dob": "19170917",
            "ucn": "30148714-ec63-4899-9d7e-61d6c16c556c"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RJgO3YsBq75y0nEDyiHQ",
          "_score": 0.24219814,
          "_source": {
            "name": {
              "data": "Selena Josefina Martinez",
              "entityType": "PERSON"
            },
            "dob": "19990612",
            "ucn": "96111870-8ff5-4a69-ae15-bbcfddb290a5"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QpgO3YsBq75y0nEDyiHQ",
          "_score": 0.23148176,
          "_source": {
            "name": {
              "data": "Veronica Elsa Elvira Lara",
              "entityType": "PERSON"
            },
            "dob": "19561117",
            "ucn": "e0a5683e-2ee6-4434-940e-c52361a8b65e"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QZgO3YsBq75y0nEDyiHQ",
          "_score": 0.2187197,
          "_source": {
            "name": {
              "data": "Adriana Maribel Mendoza",
              "entityType": "PERSON"
            },
            "dob": "20010720",
            "ucn": "6099626f-ca6b-4613-9e7b-dfbe6fd6f680"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "RpgO3YsBq75y0nEDyiHQ",
          "_score": 0.21344954,
          "_source": {
            "name": {
              "data": "Georgina Gabriela Suarez",
              "entityType": "PERSON"
            },
            "dob": "19590303",
            "ucn": "34280978-276f-4360-a4e6-a9420108885d"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "SZgO3YsBq75y0nEDyiHQ",
          "_score": 0.20978884,
          "_source": {
            "name": {
              "data": "Valeria Clara Laura Ruth Silvia Graciela Vega",
              "entityType": "PERSON"
            },
            "dob": "19860205",
            "ucn": "b765ccfe-bf43-41d5-a8d6-31c9221a7638"
          }
        },
        {
          "_index": "rni-test-index",
          "_id": "QJgO3YsBq75y0nEDyiHQ",
          "_score": 0.20629452,
          "_source": {
            "name": {
              "data": "Consuelo Sandra Leticia Graciela Sosa",
              "entityType": "PERSON"
            },
            "dob": "20101112",
            "ucn": "b52db9ee-8172-4acf-ba3c-4eb2498b9ecb"
          }
        }
      ]
    }
  }

  function ExampleResult() {
    return (
      <Collapse title="Example Result" defaultCollapsed={true}>
        <pre className="p-2">
          {JSON.stringify(exampleQueryResult, null, 2)}
        </pre>
      </Collapse>
    )
  }
  function ImportantParameters() {
    return (
      <Collapse title="Important Parameters" defaultCollapsed={true}>
        <ul>
          <li className="list-item">size: the number of hits to return</li>
          <li className="list-item">query: the query to execute</li>
          <li className="list-item">rescore: the rescore query to execute</li>
          <li className="list-item">
            window_size: the number of hits to rescore.
            <p className="font-bold pl-2">This should be equal to or greater than the size parameter</p>
          </li>
        </ul>
      </Collapse>
    )
  }
  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on queries, see <a className=" text-blue-600" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html">the docs</a></li>
          <li className="list-item">This query will return a list of hits for the search</li>
          <li className="list-item italic">This will execute both the first pass portion and the RNI rescoring of the function</li>
          <li className="list-item italic">Note that the result scores are decimals between 0 and 1</li>
          <li className="list-item font-bold">If you are getting whole numbers, something has been done incorrectly in the query</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleScreenShot() {
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image
          src={completeQueryImage}
          width={1500}
          height={500}
          alt=""
        />
      </Collapse>
    )
  }
  return (
    <div>
      <p>
        <Collapse title="Request Instructions" defaultCollapsed={true}>
          <p>To query the index, we will make a POST request to
            <p className="p-5">{url}</p>
            with the following body (in Postman, you can use the raw editor and select JSON):
          </p>
          <pre className="p-2">
            {JSON.stringify(exampleQueryObject, null, 2)}
          </pre>
        </Collapse>
      </p>
      <ImportantParameters />
      <ExampleResult />
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )
}

const queryObject = {
  "size": 10,
  "query": {
    "bool": {
      "should": [
        {
          "match": {
            "name": JSON.stringify({ "data": 'Leonard Cohen', "entityType": "PERSON" })
          }
        },
        {
          "match": {
            "dob": "19340921"
          }
        }
      ]
    }
  },
  "rescore": {
    "window_size": 10,
    "query": {
      "rescore_query": {
        "function_score": {
          "doc_score": {
            "fields": {
              "name": {
                "query_value": {
                  "data": "Leonard Cohen",
                  "entityType": "PERSON"
                },
              },
              "dob": {
                "query_value": "19340921",
              }
            }
          }
        }
      },
      "query_weight": 0,
      "rescore_query_weight": 1
    }
  }
}