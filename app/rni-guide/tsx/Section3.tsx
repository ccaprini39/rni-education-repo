import Collapse from "@/app/components/Collapse"
import Image from "next/image"
import pairwiseImage from "@/public/pairwise.png"

export function PairwiseAnalysis() {
  const url = "http://localhost:9200/rni_plugin/_pair_match?type=rni_name"

  const examplePairwiseObject = {
    "dataPair": {
      "data1": "Leonard Cohen",
      "data2": "Leon Kohn"
    }
  }

  const exampleResponse = {
    "score": 0.6636744744403935,
    "type": "TOKEN_BY_TOKEN",
    "avgMatchedTokenLMBinLeft": 1.0,
    "avgMatchedTokenLMBinRight": 1.0,
    "spanMatches": [
      {
        "leftSpan": {
          "start": 0,
          "end": 4,
          "length": 4
        },
        "rightSpan": {
          "start": 0,
          "end": 4,
          "length": 4
        },
        "reason": "MATCH"
      },
      {
        "leftSpan": {
          "start": 8,
          "end": 13,
          "length": 5
        },
        "rightSpan": {
          "start": 5,
          "end": 9,
          "length": 4
        },
        "reason": "STRING_SIMILARITY"
      },
      {
        "leftSpan": {
          "start": 4,
          "end": 7,
          "length": 3
        },
        "rightSpan": "",
        "reason": "DELETION"
      }
    ],
    "annotations": [
      {
        "type": "One-sided deletion boost",
        "parameter": 0.0,
        "oldScore": 0.4383722371837559,
        "newScore": 0.4512165661759399
      },
      {
        "type": "Final bias",
        "parameter": 0.0,
        "oldScore": 0.4512165661759399,
        "newScore": 0.6636744744403935
      }
    ],
    "leftTokens": [
      {
        "data": "leon",
        "field": 0,
        "originalData": "leon",
        "spanStart": 0,
        "spanEnd": 4,
        "type": "UNKNOWN",
        "weight": 0.3332280265686356
      },
      {
        "data": "ard",
        "field": 0,
        "originalData": "ard",
        "spanStart": 4,
        "spanEnd": 7,
        "type": "UNKNOWN",
        "weight": 0.31888175757071713
      },
      {
        "data": "cohen",
        "field": 0,
        "originalData": "cohen",
        "spanStart": 8,
        "spanEnd": 13,
        "type": "UNKNOWN",
        "weight": 0.3478902158606473
      }
    ],
    "rightTokens": [
      {
        "data": "leon",
        "field": 0,
        "originalData": "leon",
        "spanStart": 0,
        "spanEnd": 4,
        "type": "UNKNOWN",
        "weight": 0.5
      },
      {
        "data": "kohn",
        "field": 0,
        "originalData": "kohn",
        "spanStart": 5,
        "spanEnd": 9,
        "type": "UNKNOWN",
        "weight": 0.5
      }
    ],
    "finalTuples": [
      {
        "originalScore": 1.0,
        "packingScore": 3.3329121062745424,
        "score": 1.0,
        "reason": "MATCH",
        "leftIndex0": 0,
        "leftIndex1": 0,
        "rightIndex0": 0,
        "rightIndex1": 0
      },
      {
        "originalScore": 0.3333333333333333,
        "packingScore": 1.6957804317212946,
        "score": 0.3333333333333333,
        "reason": "STRING_SIMILARITY",
        "leftIndex0": 2,
        "leftIndex1": 2,
        "rightIndex0": 1,
        "rightIndex1": 1
      },
      {
        "originalScore": 0.269,
        "packingScore": 0.0,
        "score": 0.269,
        "reason": "DELETION",
        "leftIndex0": 1,
        "leftIndex1": 1,
        "rightIndex0": -1,
        "rightIndex1": -1
      }
    ],
    "otherTuples": [],
    "debugInfo": "Begin [ Leonard Cohen Latn eng:eng NONE (leonard cohen)] [ Leon Kohn Latn eng:kor NONE (leon kohn)]\n -- Token data ------------\n leonard (leonard) bin=1.0 (w/bias = 1.0000)\n cohen (cohen) bin=1.0 (w/bias = 1.0000)\n leon (leon) bin=1.0 (w/bias = 1.0000)\n kohn (kohn) bin=1.0 (w/bias = 1.0000)\n --------------------------\n leonard/50@0:0 leon/50@0:0 -> 0.4444 <+S>\n leonard/50@0:0 kohn/50@0:1 -> 0.0000 <null>\n cohen/50@0:1 leon/50@0:0 -> 0.1000 <null>\n cohen/50@0:1 kohn/50@0:1 -> 0.3333 <null>\n -- All Tuples ------------\n  leonard/50@0:0 == leon/50@0:0\t\tt=0.4444 ! STRING_SIMILARITY (s=2 q=2.7500 o=0.4444)\n  cohen/50@0:1 == kohn/50@0:1\t\tt=0.3333 ! STRING_SIMILARITY (s=2 q=2.0000 o=0.3333)\n --------------------------\nleonard/50@0:0 == leon/50@0:0\t\tt=0.4444 ! STRING_SIMILARITY (s=2 q=2.7500 o=0.4444)\ncohen/50@0:1 == kohn/50@0:1\t\tt=0.3333 ! STRING_SIMILARITY (s=2 q=2.0000 o=0.3333)\nFinal bias: 0.3810 -> 0.5963\nScore = 0.5963: [ Leonard Cohen Latn eng:eng NONE (leonard cohen)] [ Leon Kohn Latn eng:kor NONE (leon kohn)]\n -- Token data ------------\n leon (leon) bin=1.0 (w/bias = 1.0000)\n ard (ard) bin=1.0 (w/bias = 1.0000)\n cohen (cohen) bin=1.0 (w/bias = 1.0000)\n leon (leon) bin=1.0 (w/bias = 1.0000)\n kohn (kohn) bin=1.0 (w/bias = 1.0000)\n --------------------------\n leon/33@0:0 leon/50@0:0 -> 1.0000 <+S>\n leon/33@0:0 kohn/50@0:1 -> 0.2000 <null>\n ard/32@0:1 leon/50@0:0 -> 0.0000 <null>\n ard/32@0:1 kohn/50@0:1 -> 0.0000 <null>\n cohen/35@0:2 leon/50@0:0 -> 0.1000 <null>\n cohen/35@0:2 kohn/50@0:1 -> 0.3333 <null>\n -- All Tuples ------------\n  leon/33@0:0 == leon/50@0:0\t\tt=1.0000 ! MATCH (s=2 q=3.3329 o=1.0000)\n  cohen/35@0:2 == kohn/50@0:1\t\tt=0.3333 ! STRING_SIMILARITY (s=2 q=1.6958 o=0.3333)\n --------------------------\nleon/33@0:0 == leon/50@0:0\t\tt=1.0000 ! MATCH (s=2 q=3.3329 o=1.0000)\ncohen/35@0:2 == kohn/50@0:1\t\tt=0.3333 ! STRING_SIMILARITY (s=2 q=1.6958 o=0.3333)\nard/32@0:1 == <DEL>\t\tt=0.2690 DELETION (s=2 q=0.0000 o=0.2690)\nOne-sided deletion boost: 0.4384 -> 0.4512\nFinal bias: 0.4512 -> 0.6637\nScore[alt] = 0.6637: [ Leonard Cohen Latn eng:eng NONE (leonard cohen)] [ Leon Kohn Latn eng:kor NONE (leon kohn)]\nEnd 0.6637\n"
  }

  function MoreInfo() {
    return (
      <Collapse title="More Info" defaultCollapsed={true}>
        <ul>
          <li className="list-item">For more info on pairwise analysis, see the RNI guide docs</li>
          <li className="list-item">This endpoint is only available with the RNI plugin</li>
          <li className="list-item">Note the hideous response object which has been clarified in the release you have locally</li>
        </ul>
      </Collapse>
    )
  }
  function ExampleResult() {
    return (
      <Collapse title="Example Result" defaultCollapsed={true}>
        <pre className="p-2">
          {JSON.stringify(exampleResponse, null, 2)}
        </pre>
      </Collapse>
    )
  }

  function ExampleScreenShot() {
    return (
      <Collapse title="Example Screen Shot" defaultCollapsed={true}>
        <Image
          src={pairwiseImage}
          width={1500}
          height={500}
          alt=""
        />
      </Collapse>
    )
  }

  return (
    <div>
      <p>To perform pairwise analysis, you need to make a POST request to the following url:</p>
      <p className="p-5">{url}</p>
      <p>with the following body; in Postman, you can use the raw editor and select JSON:</p>
      <pre className="p-2">
        {JSON.stringify(examplePairwiseObject, null, 2)}
      </pre>
      <ExampleResult />
      <MoreInfo />
      <ExampleScreenShot />
    </div>
  )


}