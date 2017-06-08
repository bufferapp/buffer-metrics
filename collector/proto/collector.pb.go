// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/collector.proto

/*
Package metrics is a generated protocol buffer package.

It is generated from these files:
	proto/collector.proto

It has these top-level messages:
	Visit
	Utm
	UserAgent
	Response
*/
package metrics

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Visit struct {
	Id string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	// google.protobuf.Timestamp timestamp = 2;
	Uri       string     `protobuf:"bytes,3,opt,name=uri" json:"uri,omitempty"`
	Ip        string     `protobuf:"bytes,4,opt,name=ip" json:"ip,omitempty"`
	Utm       *Utm       `protobuf:"bytes,5,opt,name=utm" json:"utm,omitempty"`
	Useragent *UserAgent `protobuf:"bytes,6,opt,name=useragent" json:"useragent,omitempty"`
	VisitorId string     `protobuf:"bytes,7,opt,name=visitor_id,json=visitorId" json:"visitor_id,omitempty"`
}

func (m *Visit) Reset()                    { *m = Visit{} }
func (m *Visit) String() string            { return proto.CompactTextString(m) }
func (*Visit) ProtoMessage()               {}
func (*Visit) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Visit) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Visit) GetUri() string {
	if m != nil {
		return m.Uri
	}
	return ""
}

func (m *Visit) GetIp() string {
	if m != nil {
		return m.Ip
	}
	return ""
}

func (m *Visit) GetUtm() *Utm {
	if m != nil {
		return m.Utm
	}
	return nil
}

func (m *Visit) GetUseragent() *UserAgent {
	if m != nil {
		return m.Useragent
	}
	return nil
}

func (m *Visit) GetVisitorId() string {
	if m != nil {
		return m.VisitorId
	}
	return ""
}

// Visit helper messages
type Utm struct {
	Source   string `protobuf:"bytes,1,opt,name=source" json:"source,omitempty"`
	Medium   string `protobuf:"bytes,2,opt,name=medium" json:"medium,omitempty"`
	Campaign string `protobuf:"bytes,3,opt,name=campaign" json:"campaign,omitempty"`
	Content  string `protobuf:"bytes,4,opt,name=content" json:"content,omitempty"`
}

func (m *Utm) Reset()                    { *m = Utm{} }
func (m *Utm) String() string            { return proto.CompactTextString(m) }
func (*Utm) ProtoMessage()               {}
func (*Utm) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *Utm) GetSource() string {
	if m != nil {
		return m.Source
	}
	return ""
}

func (m *Utm) GetMedium() string {
	if m != nil {
		return m.Medium
	}
	return ""
}

func (m *Utm) GetCampaign() string {
	if m != nil {
		return m.Campaign
	}
	return ""
}

func (m *Utm) GetContent() string {
	if m != nil {
		return m.Content
	}
	return ""
}

type UserAgent struct {
	Browser string `protobuf:"bytes,1,opt,name=browser" json:"browser,omitempty"`
	Version string `protobuf:"bytes,2,opt,name=version" json:"version,omitempty"`
}

func (m *UserAgent) Reset()                    { *m = UserAgent{} }
func (m *UserAgent) String() string            { return proto.CompactTextString(m) }
func (*UserAgent) ProtoMessage()               {}
func (*UserAgent) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *UserAgent) GetBrowser() string {
	if m != nil {
		return m.Browser
	}
	return ""
}

func (m *UserAgent) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

//
type Response struct {
	Message string `protobuf:"bytes,1,opt,name=message" json:"message,omitempty"`
}

func (m *Response) Reset()                    { *m = Response{} }
func (m *Response) String() string            { return proto.CompactTextString(m) }
func (*Response) ProtoMessage()               {}
func (*Response) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *Response) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*Visit)(nil), "metrics.Visit")
	proto.RegisterType((*Utm)(nil), "metrics.Utm")
	proto.RegisterType((*UserAgent)(nil), "metrics.UserAgent")
	proto.RegisterType((*Response)(nil), "metrics.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for MetricsCollector service

type MetricsCollectorClient interface {
	TrackVisit(ctx context.Context, in *Visit, opts ...grpc.CallOption) (*Response, error)
}

type metricsCollectorClient struct {
	cc *grpc.ClientConn
}

func NewMetricsCollectorClient(cc *grpc.ClientConn) MetricsCollectorClient {
	return &metricsCollectorClient{cc}
}

func (c *metricsCollectorClient) TrackVisit(ctx context.Context, in *Visit, opts ...grpc.CallOption) (*Response, error) {
	out := new(Response)
	err := grpc.Invoke(ctx, "/metrics.MetricsCollector/TrackVisit", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for MetricsCollector service

type MetricsCollectorServer interface {
	TrackVisit(context.Context, *Visit) (*Response, error)
}

func RegisterMetricsCollectorServer(s *grpc.Server, srv MetricsCollectorServer) {
	s.RegisterService(&_MetricsCollector_serviceDesc, srv)
}

func _MetricsCollector_TrackVisit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Visit)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetricsCollectorServer).TrackVisit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/metrics.MetricsCollector/TrackVisit",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetricsCollectorServer).TrackVisit(ctx, req.(*Visit))
	}
	return interceptor(ctx, in, info, handler)
}

var _MetricsCollector_serviceDesc = grpc.ServiceDesc{
	ServiceName: "metrics.MetricsCollector",
	HandlerType: (*MetricsCollectorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TrackVisit",
			Handler:    _MetricsCollector_TrackVisit_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/collector.proto",
}

func init() { proto.RegisterFile("proto/collector.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 309 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x91, 0xcd, 0x4e, 0xeb, 0x30,
	0x10, 0x85, 0x6f, 0x9a, 0xdb, 0x9f, 0x0c, 0x08, 0x15, 0x4b, 0x20, 0xab, 0x12, 0xa8, 0x8a, 0x58,
	0x74, 0x55, 0xa0, 0x3c, 0x00, 0x42, 0x88, 0x05, 0x0b, 0x36, 0x11, 0x65, 0x8b, 0x52, 0x67, 0x14,
	0x59, 0xad, 0xe3, 0x68, 0xec, 0x94, 0x77, 0xe2, 0x29, 0x91, 0x1d, 0x3b, 0xdd, 0xf9, 0x3b, 0x73,
	0xe4, 0x39, 0x33, 0x03, 0x57, 0x2d, 0x69, 0xab, 0xef, 0x85, 0x3e, 0x1c, 0x50, 0x58, 0x4d, 0x6b,
	0xcf, 0x6c, 0xaa, 0xd0, 0x92, 0x14, 0x26, 0xff, 0x4d, 0x60, 0xfc, 0x25, 0x8d, 0xb4, 0xec, 0x02,
	0x46, 0xb2, 0xe2, 0xc9, 0x32, 0x59, 0x65, 0xc5, 0x48, 0x56, 0x6c, 0x0e, 0x69, 0x47, 0x92, 0xa7,
	0x5e, 0x70, 0x4f, 0xef, 0x68, 0xf9, 0xff, 0xe0, 0x68, 0xd9, 0x2d, 0xa4, 0x9d, 0x55, 0x7c, 0xbc,
	0x4c, 0x56, 0x67, 0x9b, 0xf3, 0x75, 0xf8, 0x72, 0xbd, 0xb5, 0xaa, 0x70, 0x05, 0xf6, 0x00, 0x59,
	0x67, 0x90, 0xca, 0x1a, 0x1b, 0xcb, 0x27, 0xde, 0xc5, 0x4e, 0x2e, 0x83, 0xf4, 0xe2, 0x2a, 0xc5,
	0xc9, 0xc4, 0x6e, 0x00, 0x8e, 0x2e, 0x8c, 0xa6, 0x6f, 0x59, 0xf1, 0xa9, 0xef, 0x94, 0x05, 0xe5,
	0xbd, 0xca, 0xf7, 0x90, 0x6e, 0xad, 0x62, 0xd7, 0x30, 0x31, 0xba, 0x23, 0x81, 0x21, 0x6d, 0x20,
	0xa7, 0x2b, 0xac, 0x64, 0xa7, 0xf8, 0xa8, 0xd7, 0x7b, 0x62, 0x0b, 0x98, 0x89, 0x52, 0xb5, 0xa5,
	0xac, 0x9b, 0x30, 0xce, 0xc0, 0x8c, 0xc3, 0x54, 0xe8, 0xc6, 0xba, 0x84, 0xfd, 0x60, 0x11, 0xf3,
	0x67, 0xc8, 0x86, 0x8c, 0xce, 0xb6, 0x23, 0xfd, 0x63, 0x90, 0x42, 0xcf, 0x88, 0xae, 0x72, 0x44,
	0x32, 0x52, 0x37, 0xa1, 0x6b, 0xc4, 0xfc, 0x0e, 0x66, 0x05, 0x9a, 0x56, 0x37, 0x06, 0x9d, 0x4b,
	0xa1, 0x31, 0x65, 0x1d, 0x33, 0x47, 0xdc, 0xbc, 0xc1, 0xfc, 0xa3, 0x5f, 0xc9, 0x6b, 0xbc, 0x11,
	0x7b, 0x04, 0xf8, 0xa4, 0x52, 0xec, 0xc3, 0x61, 0x86, 0x9d, 0x79, 0x5e, 0x5c, 0x0e, 0x1c, 0xbf,
	0xcf, 0xff, 0xed, 0x26, 0xfe, 0xae, 0x4f, 0x7f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x9a, 0x8b, 0xad,
	0x9b, 0xf0, 0x01, 0x00, 0x00,
}