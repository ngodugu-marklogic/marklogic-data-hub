import React from 'react';
import { Table, Tooltip } from 'antd';
import { xmlParser } from "../../util/xml-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
  item: any;
  entityDefArray: any[];
};


const ExpandableTableView: React.FC<Props> = (props) => {

  let primaryKeyValue: any = '-';
  let primaryKey: any = '-';
  let detailPath: any = '-'
  let uri: string = encodeURIComponent(props.item.uri);

  if (Object.keys(props.item.primaryKey).length !== 0) {
      primaryKeyValue = props.item.primaryKey.propertyValue;
      primaryKey = props.item.primaryKey.propertyPath;
  }

  // detailPath is the identifier used to route to detail view
  if (primaryKey !== "uri") {
      detailPath = primaryKeyValue
  }

  let data = new Array();
  let counter = 0;
  const parseJson = (obj: Object) => {
    let parsedData = new Array();
    for (var i in obj) {
      if (obj[i] !== null && typeof (obj[i]) === "object") {
        parsedData.push({
          key: counter++,
          property: i,
          children: parseJson(obj[i]),
          view: <Link to={{pathname: `/detail/${detailPath}/${uri}`,state: {id:obj[i]}}} data-cy='nested-instance'>
            <Tooltip title={'Show nested detail on a separate page'}><FontAwesomeIcon icon={faExternalLinkAlt}
                                                                               size="sm"/></Tooltip>
          </Link>
        });
      } else {
        parsedData.push({
          key: counter++,
          property: i,
          value: typeof obj[i] === 'boolean' ? obj[i].toString() : obj[i],
          view: null
        });
      }
    }
    return parsedData;
  }

  if (props.item.format === 'json' && props.item.hasOwnProperty('extracted')) {
    (props.item.extracted.content).forEach(contentObject => {
      Object.values(props.item.extracted.content[1]).forEach((content: any) => {
        data = parseJson(content);
      });
    })
  } else if (props.item.format === 'xml' && props.item.hasOwnProperty('extracted')) {
    (props.item.extracted.content).forEach(contentObject => {
      let obj = xmlParser(contentObject);
      let mappedObj = xmlParser(Object.values(props.item.extracted.content)[1]);
      let propertyValues = Object.values<any>(mappedObj);
      propertyValues.forEach((item: Object) => {
        data = parseJson(item);
      })
    })
  }


  const columns = [
    {
      title: 'Property',
      dataIndex: 'property',
      width: '20%',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      width: '20%',
    },
    {
      title: 'View',
      dataIndex: 'view',
      width: '20%',
    }
  ];

  return (
      <Table
          rowKey="key"
          dataSource={data}
          columns={columns}
          pagination={false}
          data-cy="expandable-table-view"
      />
  );
}

export default ExpandableTableView;
