export const section1 : string = 
`
# RNI Elasticsearch Plugin Guide

## 1. Introduction

RNI-Elasticsearch is an Elasticsearch plugin for building fuzzy name retrieval and name matching applications for persons, locations, and organizations. It uses Rosette Name Indexer (RNI), implementing high-speed, scalable, cross-language, and cross-script searches with the Elasticsearch full-text search engine to store the names and search keys.

RNI performs searches across a large set of languages and writing scripts. Refer to Supported Text Domains for Name Indexing and Name Matching for the complete list of supported languages.

This guide describes how to use the RNI-Elasticsearch plugin and RNI features and is not intended to be a complete guide to Elasticsearch.

### 1.1. Interpreting RNI Scores

Names are complex to match because of the large number of variations that occur within a language and across languages. RNI breaks a name into tokens and compares the matching tokens. RNI can identify variations between matching tokens including but not limited to typographical errors, phonetic spelling variations, transliteration differences, initials, and nicknames.

RNI scores range from 0 to 1. The higher the score, the greater the confidence that this a relevant match. A score of 1.0 indicates that the query name string and result name string are identical (including all name properties).

The match score is a relative indication of how similar the match is; it is not an absolute value. When comparing different name matches, the relative matches of the scores are more relevant than the actual score. Similar name matches in different languages may generate different match scores. To understand how RNI calculates the score, see Understanding Name Match Scores.

Scores less than 1.0 for similar names indicate the query name and index name vary with respect to one or more properties (such as language of origin) and/or one or more of the following:
- Variation
- Phonetic and/or spelling differences
- Missing name components
- Rarity of a shared name component
- Initials
- Nicknames
- "Cousin" or cognate names
- Uppercase/Lowercase
- Reordered name components
- Variable Segmentation
- Corresponding name fields
- Truncation of name elements

Example(s):
- Nayif Hawatmeh and Nayif Hawatma
- Mohammad Salah and Mohammad Abd El-Hamid Salah
- Two English names that contain Ditters are more likely to match than two names that contain Smith
- John F. Kennedy and John Fitzgerald Kennedy
- Bobby Holguin and Robert Holguin
- Pedro Calzon and Peter Calzon
- Rosa Elena PACHECO and Rosa Elena Pacheco
- Zedong Mao and Mao Zedong
- Henry Van Dick and Henri VanDick Robert Smith and Robert JohnSmyth
- For [Katherine][Anne][Cox], the similarity with [Katherine][Ann][Cox] is higher than the similarity with [Katherine Ann][Cox]
- For Sawyer, the similarity with Sawy is higher than the similarity with Sawi.

`

export const section2 = 
`
## 2. Installing RNI-Elasticsearch

**IMPORTANT**: The RNI Elasticsearch plugin does not work with the AWS managed elastic service.

To use RNI-Elasticsearch, you need the RNI Elasticsearch plugin, an RLP license file (rlp-license.xml), and Elasticsearch.

**NOTE**: If you are using the Linux distribution of RNI-ES, note that glibc is required. The version of glibc that the native libraries are built against can be found in the filename of the distributed package.

### Steps to Install Elasticsearch

1. **Install Elasticsearch**: If you do not already have it, install Elasticsearch. Download and unzip `Elasticsearch-<version>.zip`.

**IMPORTANT**: The version of Elasticsearch must match the first three digits of the version of the RNI-ES plugin. If your version of Elasticsearch does not match the plugin version, the plugin will not install&#8203;``【oaicite:0】``&#8203;.

`

