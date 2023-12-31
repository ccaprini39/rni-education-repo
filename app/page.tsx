import Collapse from "./components/Collapse";
import * as Section1 from "./rni-guide/tsx/Section1";
import * as Section2 from "./rni-guide/tsx/Section2";
import * as Section3 from "./rni-guide/tsx/Section3";


export default function Home() {

  return (
    <div className="m-5">
      <h1 className="text-3xl">RNI Guide</h1>
      <hr className="border-t border-gray-400 my-8" />
      <h2 className="text-xl">Index Creation and Basic Indexing</h2>
      <Collapse title="Create an index with a mapping" defaultCollapsed={true}>
        <Section1.Mapping />
      </Collapse>
      <Collapse title="Index a single document" defaultCollapsed={true}>
        <Section1.IndexOneDoc />
      </Collapse>
      <Collapse title="Bulk index multiple documents" defaultCollapsed={true}>
        <Section1.BulkIndex />
      </Collapse>
      <hr className="border-t border-gray-400 my-8" />
      <h2 className="text-xl">Queries</h2>
      <Collapse title="First pass only query" defaultCollapsed={true}>
        <Section2.FirstPassOnlyQuery />
      </Collapse>
      <Collapse title="RNI query" defaultCollapsed={true}>
        <Section2.CompleteQuery />
      </Collapse>
      <hr className="border-t border-gray-400 my-8" />
      <h2 className="text-xl">Pairwise Analysis</h2>
      <Collapse title="Pairwise Analysis" defaultCollapsed={true}>
        <Section3.PairwiseAnalysis />
      </Collapse>
    </div>
  )
}

