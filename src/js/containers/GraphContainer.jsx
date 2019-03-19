import React, { Component } from 'react';
const MXGraph = require('mxgraph')();

class GraphContainer extends Component {

    render() {
        const Container = <div id={'#graphContainer'} className={'container-fluid'} />;
        return Container;
    }

    initializeMxGraph(container) {
        // Checks if the browser is supported
        if (!MXGraph.mxClient.isBrowserSupported())
        {
            // Displays an error message if the browser is not supported.
            MXGraph.mxUtils.error('Browser is not supported!', 200, false);
        }
        else
        {
            // Disables the built-in context menu
            MXGraph.mxEvent.disableContextMenu(container);
            // Creates the graph inside the given container
            var graph = new MXGraph.mxGraph(container);
            graph.setConnectable(true);

            // Enables connect preview for the default edge style
            graph.connectionHandler.createEdgeState = function()
            {
                var edge = graph.createEdge(null, null, null, null, null);

                return new MXGraph.mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));
            };

            // Specifies the default edge style
            graph.getStylesheet().getDefaultEdgeStyle()['edgeStyle'] = 'orthogonalEdgeStyle';

            // Enables rubberband selection
            new MXGraph.mxRubberband(graph);

            // Gets the default parent for inserting new cells. This
            // is normally the first child of the root (ie. layer 0).
            var parent = graph.getDefaultParent();

            // Adds cells to the model in a single step
            graph.getModel().beginUpdate();
            try
            {
                var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
                var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
                graph.insertEdge(parent, null, '', v1, v2);
            }
            finally
            {
                // Updates the display
                graph.getModel().endUpdate();
            }
        }
    }

    componentDidMount() {
        this.initializeMxGraph(document.getElementById('#graphContainer'));
    }
}

export default GraphContainer;
