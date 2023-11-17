import Collapse from "@/app/components/Collapse"
import Image from "next/image"
import createIndexImage from "@/public/createNewIndex.PNG"
import indexOneDocImage from "@/public/indexOneDoc.PNG"
import bulkIndexImage from "@/public/bulkIndex.PNG"

export function Mapping() {
  const url = 'http://localhost:9200/rni-test-index'

  const putMapping = {
    "mappings": {
      "properties": {
        "dob": {
          "type": "rni_date",
          "format": "yyyyMMdd"
        },
        "name": {
          "type": "rni_name"
        },
        "ucn": {
          "type": "keyword"
        }
      }
    }
  }

  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on mappings, see <a className=" text-blue-600" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html">the docs</a></li>
          <li className="list-item">This creates an index called rni-test-index</li>
          <li className="list-item">The mappings don't need to be defined at creation time, but if you try to index something without creating the mappings it will default to the non-RNI types</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleScreenShot(){
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image 
          src={createIndexImage}
          width={1500}
          height={500}
          alt="" 
        />
      </Collapse>
    )
  }
  return (
    <div>
      <p>To create an index with a mapping, you need to specify the mapping when creating the index</p>
      <p>We will make a PUT request to
        <p className="p-5">{url}</p>
        with the following body (in Postman, you can use the raw editor and select JSON):
      </p>
      <pre className="p-2">
        {JSON.stringify(putMapping, null, 2)}
      </pre>
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )
}

export function IndexOneDoc() {
  const url = 'http://localhost:9200/rni-test-index/_doc'
  const doc = {
    "ucn": "1234567890",
    "dob": "19900101",
    "name": {
      "data": "John Smith",
      "entityType": "PERSON"
    }
  }
  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on indexing, see <a className=" text-blue-600" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html">the docs</a></li>
          <li className="list-item">This creates a single document in the index</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleScreenShot(){
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image 
          src={indexOneDocImage}
          width={1500}
          height={500}
          alt="" 
        />
      </Collapse>
    )
  }
  return (
    <div>
      <p>To create an index with a mapping, you need to specify the mapping when creating the index:</p>
      <p>We will make a POST request to
        <p className="p-5">{url}</p> with the following body (in Postman, you can use the raw editor and select JSON):</p>
      <pre className="p-2">
        {JSON.stringify(doc, null, 2)}
      </pre>
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )
}

export function BulkIndex() {
  const bulkIndexString =
    `
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Consuelo Sandra Leticia Graciela Sosa","entityType":"PERSON"},"dob":"20101112","ucn":"b52db9ee-8172-4acf-ba3c-4eb2498b9ecb"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Adriana Maribel Mendoza","entityType":"PERSON"},"dob":"20010720","ucn":"6099626f-ca6b-4613-9e7b-dfbe6fd6f680"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Veronica Elsa Elvira Lara","entityType":"PERSON"},"dob":"19561117","ucn":"e0a5683e-2ee6-4434-940e-c52361a8b65e"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Angel Ruben Eliseo Flores","entityType":"PERSON"},"dob":"19400327","ucn":"59b302a3-24e0-41c7-aa26-9729e34ac836"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Selena Josefina Martinez","entityType":"PERSON"},"dob":"19990612","ucn":"96111870-8ff5-4a69-ae15-bbcfddb290a5"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Alejandro Clemente Armando Carlos Emiliano David Armando Eugenio Hector Demetrio Pacheco","entityType":"PERSON"},"dob":"19890228","ucn":"6fa87461-4ebf-4d95-a213-0d1f570c9b2e"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Georgina Gabriela Suarez","entityType":"PERSON"},"dob":"19590303","ucn":"34280978-276f-4360-a4e6-a9420108885d"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Guadalupe Jesusa Alicia Carla Aurora Villalobos","entityType":"PERSON"},"dob":"19200824","ucn":"42dc1e4f-d18c-4a93-8dff-262725b012dd"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Sandra Rosa Cervantes","entityType":"PERSON"},"dob":"19170917","ucn":"30148714-ec63-4899-9d7e-61d6c16c556c"}
{"index":{"_index":"rni-test-index"}}
{"name":{"data":"Valeria Clara Laura Ruth Silvia Graciela Vega","entityType":"PERSON"},"dob":"19860205","ucn":"b765ccfe-bf43-41d5-a8d6-31c9221a7638"}

  `
  const url = 'http://localhost:9200/_bulk'

  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on bulk indexing, see <a className=" text-blue-600" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html">the docs</a></li>
          <li className="list-item">This creates 10 documents in the index</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleScreenShot(){
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image 
          src={bulkIndexImage}
          width={1500}
          height={500}
          alt="" 
        />
      </Collapse>
    )
  }

  return (
    <div>
      <p>To bulk index large numbers of docs, use the bulk enpoint</p>
      <p>We will make a POST request to <p className="p-5">{url}</p> with the following body (in Postman, you can use the raw editor and select JSON):</p>
      <p className="italic">Note that it must end with the new line, so be careful copy/pasting</p>
      <pre className="p-2">
        {bulkIndexString}
      </pre>
      <p></p>
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )

}